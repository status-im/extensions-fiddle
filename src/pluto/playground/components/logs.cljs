(ns pluto.playground.components.logs
  (:require [cljsjs.material-ui]))

(def Table (aget js/MaterialUI "Table"))
(def TableHead (aget js/MaterialUI "TableHead"))
(def TableBody (aget js/MaterialUI "TableBody"))
(def TableRow (aget js/MaterialUI "TableRow"))
(def TableCell (aget js/MaterialUI "TableCell"))

(defn- pretty-print-data [{:keys [data target context] :as m}]
  (str (or data (merge target context))))

(defn table [v]
  (.log js/console v)
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
       ^{:key id}
       [:> TableRow
        [:> TableCell id]
        [:> TableCell category]
        [:> TableCell type]
        [:> TableCell (pretty-print-data m)]])]]])
