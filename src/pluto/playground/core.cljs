(ns pluto.playground.core
  (:require-macros [react-native-web.views :refer [defview letsubs]])
  (:require [clojure.string :as string]
            [pluto.playground.components.source :as source]
            [pluto.playground.components.logs :as logs]
            pluto.playground.fx
            pluto.playground.subs
            pluto.reader.events
            pluto.reader.views
            [pluto.log :as log]
            [react-native-web.extensions :as rnw.extensions]
            [react-native-web.hooks :as hooks]
            [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [re-frame.registrar :as registrar]
            [re-frame.loggers :as re-frame.loggers]
            [react-native-web.react :as react]
            [pluto.playground.components.dialogs :as dialogs]
            [pluto.playground.components.material-ui :as material-ui]))

(def warn (js/console.warn.bind js/console))

(def margin 10)

(re-frame.loggers/set-loggers!
 {:warn (fn [& args]
          (cond
            (= "re-frame: overwriting" (first args)) nil
            :else (apply warn args)))})

(defn- dispatch-events [ctx events]
  (doseq [event events]
    (if (vector? event)
      (re-frame/dispatch event)
      (log/fire! ctx ::log/error :event/dispatch event))))

(defn- resolve-query [ctx [id :as data]]
  (if (registrar/get-handler :sub id)
    (re-frame/subscribe data)
    (log/fire! ctx ::log/error :query/resolve data)))

(defn cartouche [{:keys [path] :as m} data]
  (let [p @(re-frame/subscribe [:extension/selected])]
    [:div {:on-mouse-enter #(re-frame/dispatch [:extension/set-selected path])
           :on-mouse-leave #(re-frame/dispatch [:extension/set-selected nil])
           :style          (when (= p path) {:border "1px solid black"})}
     data]))

(defn wrap-view [parent-ctx data]
  [cartouche parent-ctx
    data])

(def ctx
  {:env        {:id "Extension ID"}
   :capacities rnw.extensions/capacities
   :query-fn   resolve-query
   ;:view-fn    wrap-view
   :event-fn   dispatch-events
   :log-fn   #(re-frame/dispatch [:extension/append-log %])})

(defn flatten-errors [m]
  (when (map? m)
    (apply concat (reduce-kv #(concat %1 (if (map? %3) (vals %3) %3)) [] m))))

(defn parse-extension-id [extension-selection]
  (map keyword (string/split extension-selection #"/")))

(defn view [props data id]
  [(get-in data [:views id]) props])

(defview selected-ui []
  (letsubs [extension-selection [:extension-selection]
            props               [:extension/selected-properties]
            data                [:extension/parsed]]
    (let [[type id] (parse-extension-id extension-selection)]
      (case type
        :hooks (hooks/hook-in id (get-in data [:hooks id]) (get data :lifecycle) props)
        :views [:div {:style {:display :flex :flex 1 :align-items :center
                              :justify-content :center :max-width "100%"}}
                ^{:key (str props id data)}
                [:div {:style {:display :flex :flex 1 :height :max-content :overflow :auto :max-width "100%" :border "blue 1px solid"}}
                 [view props data id]]]
        nil))))

(defview eth-wallet []
  (letsubs [ethereum-addr [:get :ethereum-addr]]
    [:div {:style {:flex 1 :display :flex :justify-content :flex-end :padding 10}}
     (if ethereum-addr
       [:div {:style {:color "inherit"}} "Wallet connected: " ethereum-addr]
       [material-ui/button {:color "inherit" :on-click #(re-frame/dispatch [:extensions/init-wallet])}
        "Connect wallet"])]))

(defview view-selection []
  (letsubs [selection [:extension-selection]
            extension-keys [:extension-keys]]
    [:div {:style {:display :flex :justify-content :flex-end :align-items :center :margin-top margin}}
     [material-ui/select
      {:on-change #(re-frame/dispatch [:set :extension-selection (.-key %2)])
       :selected  selection
       :options   (map #(do {:value % :label %}) extension-keys)}]
     [:div {:style {:margin-left margin}}
      [material-ui/button {:color "primary" :variant "contained" :on-click #(re-frame/dispatch [:set :browse-properties true])}
       "Data"]]]))

(defview logs-errors []
  (letsubs [logs   [:extension/filtered-logs]
            errors [:extension/errors]]
    [logs/table (or (flatten-errors errors) logs)]))

(defn simple-item [key item]
  [:div {:style {:display :flex}}
   (when (= key item)
     [:div {:style {:display :flex :width 5 :background-color "#3f51b5" :min-width 5}}])
   [:div {:style {:cursor :pointer :display :flex
                   :border-radius "4px" :padding 5 :font-weight (when (= key item) :bold)}
          :on-click #(re-frame/dispatch [:extension/select-simple-item key])}
    key]])

(defn simple-edn-type-items [value label item]
  (when (seq value)
    [:div {:style {:display :flex :flex-direction :column :margin-top 10}}
     [:div {:style {:font-weight :bold}} label]
     (for [[key source] value]
       ^{:key key}
       [simple-item key item])]))

(defview simple-panel []
  (letsubs [{:keys [meta views events hooks life]} [:extension/simple-sources]
            simple? [:get :simple-mode?]
            item [:get :simple-item]]
    (when simple?
      [:div {:style {:display :flex :flex 1 :flex-direction :column :padding 5 :width 200}}
       [:div {:style {:display :flex}}
        [material-ui/button {:color "primary" :variant "contained"
                             :on-click #(re-frame/dispatch [:set :add-edn-item {:item-type "views/"}])}
         "Add"]]
       [:div {:style {:display :flex :flex 1 :flex-direction :column
                      :overflow :auto :margin-top 10}}
        [simple-edn-type-items meta "Meta" item]
        [simple-edn-type-items life "Lifecycle" item]
        [simple-edn-type-items events "Events" item]
        [simple-edn-type-items views "Views" item]
        [simple-edn-type-items hooks "Hooks" item]]])))

(defview layout []
  (letsubs [{:keys [events]} [:extension/parsed]
            simple? [:get :simple-mode?]]
    (let [event-names (keys events)]
      [:div
       [:> material-ui/AppBar {:position :static}
        [:> material-ui/Toolbar {:variant "dense"}
         [:div {:style {:display :flex :flex 1 :align-items :center :justify-content :space-between}}
          [:div {:style {:display :flex :flex-direction :row :align-items :center}}
           [:> material-ui/Typography {:color "inherit" :variant "h6"}
            "Extensions Fiddle"]
           [material-ui/switch {:color "default" :checked (boolean simple?) :on-change #(re-frame/dispatch [:extension/switch-mode %2])}]
           [:> material-ui/Typography {:color "inherit" :style {}}
            "Simple mode"]]
          [:div {:style {:display :flex :flex-direction :row}}
           [material-ui/button {:color "inherit" :on-click #()}
            "New extension"]
           [eth-wallet]
           [material-ui/button {:color "inherit" :on-click #(re-frame/dispatch [:set :examples true])}
            "Examples"]
           [material-ui/button {:color "inherit" :on-click #(re-frame/dispatch [:extension/publish])}
            "Publish"]]]]]
       [:div {:style {:display :flex :flex 1}}
        [dialogs/dialogs]
        [simple-panel]
        [:div {:style {:display :inline-block :width  (str "calc(100% - " (if simple? 600 400) "px)")}}
         [source/editor {:on-change #(re-frame.core/dispatch [:extension/update-source ctx %])}]
         [:div {:style {:background-color "#fafafa"}}
          [:div {:style {:display :flex :flex 1 :align-items :center :justify-content :space-between}}
           [:> material-ui/Typography {:style {:margin-left margin} :color "inherit" :variant "h6"}
            "Logs"]
           [:div {:style {:display :flex :justify-content :flex-end :align-items :center}}
            [material-ui/switch {:color "primary" :on-change #(re-frame/dispatch [:extension/switch-filter-logs %2])}]
            [:> material-ui/Typography {:color "inherit" :style {:margin "10px"}}
             "Filter traces"]
            [material-ui/button {:color "inherit" :on-click #(re-frame/dispatch [:extension/clear-logs])}
             "Clear logs"]]]
          [:div {:style {:height "calc(40% - 100px)" :overflow :auto}}
           [logs-errors]]]]
        [:div {:style {:background-color "#fafafa" :width 400 :height "calc(100% - 64px)" :overflow :auto :padding 5}}
         [material-ui/button {:color "primary" :variant "contained" :on-click #(re-frame/dispatch [:extension/run ctx])}
          "Run"]
         [:div {:style {:border "40px solid #ddd" :border-width "20px 7px" :border-radius "40px" :margin 10}}
          [react/view {:style {:height 667}}
           [:div {:style {:display :flex :flex 1}}
            [selected-ui]]]]
         [:div {:style {:display :flex :justify-content :center :flex-direction :column :margin margin}}
          [:div {:style {:display :flex :justify-content :space-between}}
           [:> material-ui/Typography {:style {:margin-left margin} :color "inherit" :variant "h6"}
            "Inspect"]
           [material-ui/button {:color "primary" :variant "contained" :on-click #(re-frame/dispatch [:set :browse-app-db true])}
            "Local app DB"]]
          [view-selection]
          #_
          [:div {:style {:display :flex :justify-content :flex-end :align-items :center :margin-top margin}}
           [select
            {:on-change #(re-frame/dispatch [:set :extension-selection (.-key %2)])
             :selected  (first event-names)
             :options   (map #(do {:value % :label %}) event-names)}]
           [:div {:style {:margin-left margin}}
            [button {:color "primary" :variant "contained" :on-click #(re-frame/dispatch [:set :browse-properties true])}
             "Trigger"]]]
          #_
          [:div {:style {:display :flex :justify-content :flex-end :align-items :center :margin-top margin}}
           [select
            {:on-change #(re-frame/dispatch [:set :extension-selection (.-key %2)])
             :selected  (first queries)
             :options   (map #(do {:value % :label %}) queries)}]
           [:div {:style {:margin-left margin}}
            [button {:color "primary" :variant "contained" :on-click #(re-frame/dispatch [:set :browse-properties true])}
             "Watch"]]]]]]])))

(defn mount-root []
  (reagent/render [layout] (.getElementById js/document "app")))

(defn ^:export bootstrap []
  (re-frame/dispatch [:fetch-extension])
  (re-frame/dispatch [:extensions/init-wallet])
  (mount-root))
