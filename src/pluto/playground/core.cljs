(ns pluto.playground.core
  (:require-macros [react-native-web.views :refer [defview letsubs]])
  (:require [pluto.playground.components.source :as source]
            [pluto.playground.components.logs :as logs]
            pluto.playground.fx
            pluto.playground.subs
            pluto.reader.events
            pluto.reader.views
            [pluto.log :as log]
            [react-native-web.extensions :as rnw.extensions]
            [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [re-frame.registrar :as registrar]
            [re-frame.loggers :as re-frame.loggers]
            [react-native-web.react :as react]
            [pluto.playground.components.publish :as publish]))

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

(def payload
  {:name  "Test Extension"
   :users [{:nm "Jane"}
           {:nm "Sue"}]})

;; TODO list all views/events/queries used (per category)
;; TODO source viewer

(def Button (aget js/MaterialUI "Button"))

(defn button [props label]
  [:> Button props
   label])

(def Switch (aget js/MaterialUI "Switch"))

(defn switch [props]
  [:> Switch props])

(defn flatten-errors [m]
  (when (map? m)
    (apply concat (reduce-kv #(concat %1 (vals %3)) [] m))))

(defview layout []
  (letsubs [logs [:extension/filtered-logs]
            errors [:extension/errors]]
    [:div {:style {:display :flex :flex 1}}
     [publish/publish-dialog]
     [:div {:style {:display :inline-block :width "calc(100% - 400px)"}}
      [source/editor {:on-change #(re-frame.core/dispatch [:extension/update-source ctx %])}]
      [:div
       [:div {:style {:display :flex :justify-content :flex-end :align-items :center}}
        [switch {:color "primary" :on-change #(re-frame/dispatch [:extension/switch-filter-logs %2])}]
        [:span {:style {:margin "10px"}} "Filter traces"]
        [button {:color "primary" :variant "contained" :on-click #(re-frame/dispatch [:extension/clear-logs])}
         "Clear logs"]]]
      [:div {:style {:height "calc(40% - 50px)" :overflow :scroll}}
       [logs/table (or (flatten-errors errors) logs)]]]
     [:div
      [:div {:style {:display :flex :justify-content :flex-end}}
       [button {:color "primary" :variant "contained" :on-click #(re-frame/dispatch [:extension/publish])}
        "Publish"]]
      [:div {:style {:border "40px solid #ddd" :border-width "20px 7px" :border-radius "40px" :margin-top 20}}
       [react/view {:style {:width 375 :height 667}}
        [:div {:id "extension" :style {:display :flex :flex 1}}]]]]]))

(defn mount-root []
  (reagent/render [layout] (.getElementById js/document "app")))

(defn ^:export bootstrap []
  (re-frame/dispatch [:fetch-extension])
  (mount-root))
