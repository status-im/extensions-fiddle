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

(def margin 10)

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

(def AppBar (aget js/MaterialUI "AppBar"))
(def Toolbar (aget js/MaterialUI "Toolbar"))
(def Typography (aget js/MaterialUI "Typography"))

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
        :hooks (hooks/hook-in [id (get-in data [:hooks id])] props)
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
       [button {:color "inherit" :on-click #(re-frame/dispatch [:extensions/init-wallet])}
        "Connect wallet"])]))

(defview view-selection []
  (letsubs [selection [:extension-selection]
            extension-keys [:extension-keys]]
    [:div {:style {:display :flex :justify-content :flex-end :align-items :center :margin-top margin}}
     [select
      {:on-change #(re-frame/dispatch [:set :extension-selection (.-key %2)])
       :selected  selection
       :options   (map #(do {:value % :label %}) extension-keys)}]
     [:div {:style {:margin-left margin}}
      [button {:color "primary" :variant "contained" :on-click #(re-frame/dispatch [:set :browse-properties true])}
       "Data"]]]))

(defview logs-errors []
  (letsubs [logs   [:extension/filtered-logs]
            errors [:extension/errors]]
    [logs/table (or (flatten-errors errors) logs)]))

(defview layout []
  (letsubs [{:keys [events]} [:extension/parsed]]
    (let [event-names (keys events)]
      [:div
       [:> AppBar {:position :static}
        [:> Toolbar {:variant "dense"}
         [:div {:style {:display :flex :flex 1 :align-items :center :justify-content :space-between :margin margin}}
           [:> Typography {:color "inherit" :variant "h6"}
            "Extensions Fiddle"]
           [:div {:style {:display :flex :flex-direction :row}}
            [eth-wallet]
            [button {:color "inherit" :on-click #(re-frame/dispatch [:set :examples true])}
             "Examples"]
            [button {:color "inherit" :on-click #(re-frame/dispatch [:extension/publish])}
             "Publish"]]]]]
       [:div {:style {:display :flex :flex 1}}
        [dialogs/dialogs]
        [:div {:style {:display :inline-block :width "calc(100% - 400px)"}}
         [source/editor {:on-change #(re-frame.core/dispatch [:extension/update-source ctx %])}]
         [:div {:style {:background-color "#fafafa"}}
          [:div {:style {:display :flex :flex 1 :align-items :center :justify-content :space-between}}
           [:> Typography {:style {:margin-left margin} :color "inherit" :variant "h6"}
            "Logs"]
           [:div {:style {:display :flex :justify-content :flex-end :align-items :center}}
            [switch {:color "primary" :on-change #(re-frame/dispatch [:extension/switch-filter-logs %2])}]
            [:> Typography {:color "inherit" :style {:margin "10px"}}
             "Filter traces"]
            [button {:color "inherit" :on-click #(re-frame/dispatch [:extension/clear-logs])}
             "Clear logs"]]]
          [:div {:style {:height "calc(40% - 100px)" :overflow :auto}}
           [logs-errors]]]]
        [:div {:style {:background-color "#fafafa" :width 400 :height "calc(100% - 64px)" :overflow :auto}}
         [:div {:style {:border "40px solid #ddd" :border-width "20px 7px" :border-radius "40px" :margin 20}}
          [react/view {:style {:height 667}}
           [:div {:style {:display :flex :flex 1}}
            [selected-ui]]]]
         [:div {:style {:display :flex :justify-content :center :flex-direction :column :margin margin}}
          [:> Typography {:style {:margin-left margin} :color "inherit" :variant "h6"}
           "Inspect"]
          [:div {:style {:display :flex :justify-content :flex-end}}
           [button {:color "primary" :variant "contained" :on-click #(re-frame/dispatch [:set :browse-app-db true])}
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
  (when-let [el (.getElementById js/document "app")]
    (reagent/render [layout] el)))

(defn ^:export bootstrap []
  (re-frame/dispatch [:fetch-extension])
  (re-frame/dispatch [:extensions/init-wallet])
  (mount-root))
