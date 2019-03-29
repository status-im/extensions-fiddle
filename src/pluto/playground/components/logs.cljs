(ns pluto.playground.components.logs
  (:require [cljsjs.material-ui]))

(def Table (aget js/MaterialUI "Table"))
(def TableHead (aget js/MaterialUI "TableHead"))
(def TableBody (aget js/MaterialUI "TableBody"))
(def TableRow (aget js/MaterialUI "TableRow"))
(def TableCell (aget js/MaterialUI "TableCell"))

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
     (for [{:keys [id category type data]} v]
       ^{:key id}
       [:> TableRow
        [:> TableCell id]
        [:> TableCell category]
        [:> TableCell type]
        [:> TableCell (str data)]])]]])
