(ns pluto.playground.core
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
            [re-frame.loggers :as re-frame.loggers]))

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
   :view-fn    wrap-view
   :event-fn   dispatch-events
   :log-fn   #(re-frame/dispatch [:extension/append-log %])})

(def payload
  {:name  "Test Extension"
   :users [{:nm "Jane"}
           {:nm "Sue"}]})

;; TODO list all views/events/queries used (per category)
;; TODO source viewer

(def Switch (aget js/MaterialUI "Switch"))
(def Button (aget js/MaterialUI "Button"))
(def Dialog (aget js/MaterialUI "Dialog"))
(def DialogTitle (aget js/MaterialUI "DialogTitle"))

(defn publish [s]
  ())

(defn layout [{:keys [capacities] :as ctx}]
  (let [s       (re-frame/subscribe [:extension/source])
        m       @(re-frame/subscribe [:extension/data])
        data    @(re-frame/subscribe [:extension/parsed])
        v       @(re-frame/subscribe [:extension/traces])
        preview @(re-frame/subscribe [:extension/preview])]
    [:<>
     #_[:aside {:id "left"}
        [capacities/tree capacities]]
     [:main
      #_[:div {:style {:display "flex" :align-items "center" :justify-content "flex-end"}}
         [:> Button {:color "primary" :variant "contained" :on-click #(publish s)}
          "Publish"]
         #_[:> Dialog {:open true}
            [:> DialogTitle
             "Ehhhh"]]
         [:> Switch {:value     preview
                     :on-change #(re-frame/dispatch [:extension/switch-preview])}]
         [:div "Preview"]]
      [:div {:id "content"}
       (when @s
         [source/viewer {:content   s
                         :on-change #(re-frame.core/dispatch [:extension/update-source ctx %])}])
       [:div {:id "extension"}]]
      [traces/table v]]
     #_[:aside {:id "right"}
        [inspector/tree ctx
         m]]]))

(defn- on-extension-read [ctx {:keys [type value]}]
  (re-frame.core/dispatch [:extension/update-source ctx (:content value)]))

(defn ^:export bootstrap
  [s]
  (storages/fetch s #(on-extension-read ctx %))
  (reagent/render
   [layout ctx]
   (.getElementById js/document "app")))
