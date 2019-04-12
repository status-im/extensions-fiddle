(ns pluto.playground.components.material-ui
  (:require [cljsjs.material-ui]))

(def Button (aget js/MaterialUI "Button"))
(def Input (aget js/MaterialUI "Input"))

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

(def Dialog (aget js/MaterialUI "Dialog"))
(def DialogTitle (aget js/MaterialUI "DialogTitle"))
(def CircularProgress (aget js/MaterialUI "CircularProgress"))