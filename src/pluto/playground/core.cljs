(ns pluto.playground.core
  (:require-macros [react-native-web.views :refer [defview letsubs]])
  (:require [pluto.playground.components.source :as source]
            [pluto.playground.components.traces :as traces]
            pluto.playground.fx
            pluto.playground.subs
            pluto.reader.events
            pluto.reader.views
            [pluto.storages :as storages]
            [pluto.log :as log]
            [react-native-web.extensions :as rnw.extensions]
            [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [re-frame.registrar :as registrar]
            [re-frame.loggers :as re-frame.loggers]
            [react-native-web.react :as react]))

(def warn (js/console.warn.bind js/console))
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

(defn cartouche [{:keys [path]} data]
  (let [p @(re-frame/subscribe [:extension/selected])]
    [:div {:on-mouse-enter #(re-frame/dispatch [:extension/set-selected path])
           :on-mouse-leave #(re-frame/dispatch [:extension/set-selected nil])
           :style          (when (= p path) {:border "1px solid black"})}
     data]))

(defn wrap-view [parent-ctx {:keys [data] :as m}]
  (if (vector? data)
    {:data
     [cartouche parent-ctx
      data]}
    m))

(def ctx
  {:env        {:id "Extension ID"}
   :capacities rnw.extensions/capacities
   :query-fn   resolve-query
   ;:view-fn    wrap-view
   :event-fn   dispatch-events
   :log-fn   #(re-frame/dispatch [:extension/append-log %])})

(def payload
  {:name  "Test Extension"
   :users [{:nm "Jane"}
           {:nm "Sue"}]})

;; TODO list all views/events/queries used (per category)
;; TODO source viewer

(def Button (aget js/MaterialUI "Button"))
(def Dialog (aget js/MaterialUI "Dialog"))
(def DialogTitle (aget js/MaterialUI "DialogTitle"))
(def CircularProgress (aget js/MaterialUI "CircularProgress"))

(defn fetch-extension [uri]
  (storages/fetch uri #(re-frame.core/dispatch [:extension/update-editor (get-in % [:value :content])])))

(defview publish-dialog []
  (letsubs [{:keys [in-progress? hash] :as publish} [:get :publish]]
    [:> Dialog {:open (not (nil? publish)) :on-close #(re-frame/dispatch [:set :publish nil])}
     [:> DialogTitle
      "Publish extension"]
     [:div {:style {:display :flex :align-items :center :justify-content :center :margin 40}}
      (if in-progress?
        [:> CircularProgress]
        (let [ext-url (str "https://get.status.im/extension/ipfs@" hash "/")]
          [:div {:style {:display :flex :flex-direction :column}}
           [:p {:style {:margin-vertical 5 :font-weight :bold}} "Scan QR to install extension"]
           [:div "Open Status -> Press (+) -> Scan QR "]
           [:div {:style {:display :flex :align-items :center :justify-content :center}}
            [:div {:style {:display :flex :margin 20}}
             [(react/qr-code) {:value ext-url}]]]
           [:div {:style {:display :flex :flex-direction :column}}
            [:div {:style {:margin-vertical 5 :font-weight :bold}} "OR share extension URL"]
            [:div {:style {:display :flex }} ext-url]]]))]]))

(defview layout [{:keys [capacities] :as ctx}]
  (letsubs [traces [:extension/traces]]
    [:<>
     #_[:aside {:id "left"}
        [capacities/tree capacities]]
     [:main
      [publish-dialog]
      [:div {:style {:display :flex :justify-content :flex-end}}
       [:> Button {:color "primary" :variant "contained" :on-click #(re-frame/dispatch [:extension/publish])}
        "Publish"]]
      [:div {:id "content"}
       [source/viewer {:on-change #(re-frame.core/dispatch [:extension/update-source ctx %])}]
       [:div {:id "extension"}]]
      [traces/table traces]]
     #_[:aside {:id "right"}
        [inspector/tree ctx
         m]]]))

(defn mount-root []
  (reagent/render [layout ctx] (.getElementById js/document "app")))

(defn ^:export bootstrap [uri]
  (fetch-extension uri)
  (mount-root))
