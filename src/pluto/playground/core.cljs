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
            [pluto.playground.components.dialogs :as dialogs]))


;; Components

(def Button (aget js/MaterialUI "Button"))

(defn button [props label]
  [:> Button props
   label])

(def Switch (aget js/MaterialUI "Switch"))

(defn switch [props]
  [:> Switch props])

(def Select (aget js/MaterialUI "Select"))
(def MenuItem (aget js/MaterialUI "MenuItem"))

(defn select [{:keys [on-change selected options]}]
  [:> Select {:value (or selected "") :on-change on-change :auto-width true}
   (for [{:keys [value label]} options]
     ^{:key value}
     [:> MenuItem {:value value}
      label])])

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

(defn flatten-errors [m]
  (when (map? m)
    (apply concat (reduce-kv #(concat %1 (vals %3)) [] m))))

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
        :hooks (hooks/hook-in [id (get-in data [:hooks id])] props)
        :views [:div {:style {:display :flex :flex 1}}
                ^{:key (str props id data)}
                [view props data id]]
        nil))))

(defview eth-wallet []
  (letsubs [ethereum-addr [:get :ethereum-addr]]
    [:div {:style {:flex 1 :display :flex :justify-content :flex-end :padding 10}}
     (when ethereum-addr [:div "Wallet connected: " ethereum-addr])]))

(defview view-selection []
  (letsubs [selection [:extension-selection]
            extension-keys [:extension-keys]]
    [:div {:style {:display :flex :justify-content :flex-end :align-items :center :margin "10px"}}
     [:span {:style {:margin 10}}
      "Selection"]
     [select
      {:on-change #(re-frame/dispatch [:set :extension-selection (.-key %2)])
       :selected  selection
       :options   (map #(do {:value % :label %}) extension-keys)}]
     [:div {:style {:margin 10}}
      [button {:color "primary" :variant "contained" :on-click #(re-frame/dispatch [:set :browse-properties true])}
       "Data"]]]))

(defview logs-errors []
  (letsubs [logs   [:extension/filtered-logs]
            errors [:extension/errors]]
    [logs/table (or (flatten-errors errors) logs)]))

(defview layout []
  [:div {:style {:display :flex :flex 1}}
   [dialogs/dialogs]
   [:div {:style {:display :inline-block :width "calc(100% - 400px)"}}
    [eth-wallet]
    [source/editor {:on-change #(re-frame.core/dispatch [:extension/update-source ctx %])}]
    [:div
     [:div {:style {:display :flex :justify-content :flex-end :align-items :center :margin "10px"}}
      [switch {:color "primary" :on-change #(re-frame/dispatch [:extension/switch-filter-logs %2])}]
      [:span {:style {:margin "10px"}} "Filter traces"]
      [button {:color "primary" :variant "contained" :on-click #(re-frame/dispatch [:extension/clear-logs])}
       "Clear logs"]]]
    [:div {:style {:height "calc(40% - 50px)" :overflow :auto}}
     [logs-errors]]]
   [:div
    [:div {:style {:display :flex :justify-content :flex-end :padding-right 20 :margin "10px"}}
     [button {:color "primary" :variant "contained" :on-click #(re-frame/dispatch [:set :examples true])}
      "Examples"]
     [:div {:style {:width 10}}]
     [button {:color "primary" :variant "contained" :on-click #(re-frame/dispatch [:extension/publish])}
      "Publish"]]
    [react/view {:style {:width 375 :height 667 :border-color "#ddd" :border-width 6 :border-radius 3
                         :margin-horizontal 20 :margin-vertical 5}}
     [selected-ui]]
    [:div {:style {:display :flex :justify-content :center :flex-direction :column :padding 10}}
     [:div {:style {:display :flex :justify-content :flex-end}}
      [button {:color "primary" :variant "contained" :on-click #(re-frame/dispatch [:set :browse-app-db true])}
       "Local app DB"]]
     [view-selection]]]])

(defn mount-root []
  (reagent/render [layout] (.getElementById js/document "app")))

(defn ^:export bootstrap []
  (re-frame/dispatch [:fetch-extension])
  (re-frame/dispatch [:extensions/init-wallet])
  (mount-root))
