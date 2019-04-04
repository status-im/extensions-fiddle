(ns pluto.playground.components.logs
  (:require [reagent.core :as reagent]
            [pluto.error  :as error]
            [pluto.log    :as log]
            [pluto.playground.components.source :as source]
            [cljsjs.material-ui]))

(def Table (aget js/MaterialUI "Table"))
(def TableHead (aget js/MaterialUI "TableHead"))
(def TableBody (aget js/MaterialUI "TableBody"))
(def TableRow (aget js/MaterialUI "TableRow"))
(def TableCell (aget js/MaterialUI "TableCell"))

(defn- reference [v]
  [source/viewer {:content (str v)}])

(defmulti pretty-print-data
  (fn [{:keys [category type]}]
    [category type]))

(defmethod pretty-print-data [::log/trace :query/resolve] [{{query :key value :value} :data}]
  (reagent/as-element
    [:div
     [reference query]
     [:span "to"]
     [source/viewer {:content (str (or value "nil"))}]]))

(defmethod pretty-print-data [::log/trace :event/dispatch] [{:keys [data]}]
  [:<>
   (for [event data]
     ^{:key event}
     [reference event])])

;; TODO unify static and runtime (log) errors

(defmethod pretty-print-data [::error/format ::error/invalid] [{:keys [context]}]
  (str (:message context)))

(defmethod pretty-print-data :default [m]
  (str m))

(defn- data-wrapper [child]
  [:div {:style {:max-height "100px" :overflow "auto"}}
   child])

(defn- pretty-print-category [category]
  (reagent/as-element
    [:div {:style {:color (if (= category ::log/error) :red :blue)}}
     category]))

(defn table [v]
  [:div
   [:> Table
    [:> TableHead
     [:> TableRow
      [:> TableCell "Id"]
      [:> TableCell "Category"]
      [:> TableCell "Type"]
      [:> TableCell "Data"]]]
    [:> TableBody
     (for [{:keys [id category type] :as m} v]
       ^{:key (or id m)}
       [:> TableRow
        [:> TableCell id]
        [:> TableCell (pretty-print-category category)]
        [:> TableCell type]
        [:> TableCell
         [data-wrapper
          (pretty-print-data m)]]])]]])
