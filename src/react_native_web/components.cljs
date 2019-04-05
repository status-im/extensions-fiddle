(ns react-native-web.components
  (:require [react-native-web.react :as react]
            [re-frame.core :as re-frame]
            [status-im.colors :as colors]))

(defn input [{:keys [keyboard-type style on-change placeholder placeholder-text-color]}]
  [react/text-input (merge {:placeholder placeholder}
                           (when placeholder-text-color {:placeholder-text-color placeholder-text-color})
                           (when style {:style style})
                           (when keyboard-type {:keyboard-type keyboard-type})
                           (when on-change
                             {:on-change-text #(on-change {:value %})}))])

(defn touchable-opacity [{:keys [style on-press]} & children]
  (into [(react/touchable-highlight) (merge (when on-press {:on-press #(on-press {})})
                                          (when style {:style style}))] children))

(defn image [{:keys [uri style]}]
  [(react/image) (merge {:style (merge {:width 100 :height 100} style)} {:source {:uri uri}})])

(defn link [{:keys [uri]}]
  [react/text
   {:style    {:color                colors/white
               :text-decoration-line :underline}
    :on-press #(re-frame/dispatch [:browser.ui/message-link-pressed uri])}
   uri])

(defn activity-indicator-size [k]
  (condp = k
    :small "small"
    :large "large"
    nil))

(defn activity-indicator [{:keys [animating hides-when-stopped color size]}]
  [(react/activity-indicator) (merge (when animating {:animating animating})
                                     (when hides-when-stopped {:hidesWhenStopped hides-when-stopped})
                                     (when color {:color color})
                                     (when-let [size' (activity-indicator-size size)] {:size size'}))])

(defn- wrap-text-child [o]
  (if (ifn? o) o (str o)))

(defn text [o & children]
  (if (map? o)
    (into [react/text o] (map wrap-text-child children))
    (into [react/text {} o] (map wrap-text-child children))))

(defn- wrap-view-child [child]
  (if (vector? child) child [text {} child]))

(defn abstract-view [type o & children]
  (if (map? o)
    (into [type o] (map wrap-view-child children))
    (into [type {} (wrap-view-child o)] (map wrap-view-child children))))

(defn view [o & children]
  (apply abstract-view react/view o children))

(defn scroll-view [o & children]
  (apply abstract-view (react/scroll-view) o children))

(defn flat-list [{:keys [key data item-view]}]
  [(react/scroll-view)
   (for [item data]
     [item-view item])])

(defn button [{:keys [on-click enabled disabled] :as m} label]
  [touchable-opacity {:on-press (when on-click on-click)}
   [react/view {:background-color colors/blue-light :border-radius 4 :padding 5 :align-items :center}
    [react/text label]]])

(defn checkbox [{:keys [on-change checked]}]
  [react/view {:style {:background-color colors/white}}
   [(react/check-box) {:value checked
                       :on-value-change #(on-change {:value %})}]])

;; TODO NOT SUPPORTED YET
(defn component []
  [text "Not supported yet"])

(def all {'view                   {:data view}
          'scroll-view            {:data scroll-view :properties {:keyboard-should-persist-taps :keyword :content-container-style :map}}
          'keyboard-avoiding-view {:data view}
          'text                   {:data text}
          'touchable-opacity      {:data touchable-opacity :properties {:on-press :event}}
          'icon                   {:data view :properties {:key :keyword :color :any}}
          'image                  {:data image :properties {:uri :string :source :string}}
          'input                  {:data input :properties {:on-change :event :placeholder :string :keyboard-type :keyword :change-delay? :number :placeholder-text-color :any :selection-color :any}}
          'button                 {:data button :properties {:enabled :boolean :disabled :boolean :on-click :event}}
          'link                   {:data link :properties {:uri :string :text? :string :open-in? {:one-of #{:device :status}}}}
          'list                   {:data flat-list :properties {:data :vector :item-view :view :key? :keyword}}
          'checkbox               {:data checkbox :properties {:on-change :event :checked :boolean}}
          'activity-indicator     {:data activity-indicator :properties {:animating :boolean :color :string :size :keyword :hides-when-stopped :boolean}}
          ;; TODO NOT SUPPORTED YET
          'picker                 {:data component :properties {:on-change :event :selected :string :enabled :boolean :data :vector}}
          'nft-token-viewer       {:data component :properties {:token :string}}
          'transaction-status     {:data component :properties {:outgoing :string :tx-hash :string}}
          'map                    {:data component
                                   :properties {:marker {:lng :number
                                                         :lat :number
                                                         :boundingbox {:lng1 :number
                                                                       :lat1 :number
                                                                       :lng2 :number
                                                                       :lat2 :number}}
                                                :fly? :boolean
                                                :interactive? :boolean
                                                :on-change :event}}
          'map-link               {:data component :properties {:text :string :lng :any :lat :any}}})
