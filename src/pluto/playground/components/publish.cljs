(ns pluto.playground.components.publish
  (:require-macros [react-native-web.views :refer [defview letsubs]])
  (:require [re-frame.core :as re-frame]
            [react-native-web.react :as react]
            [cljsjs.material-ui]))

(def Dialog (aget js/MaterialUI "Dialog"))
(def DialogTitle (aget js/MaterialUI "DialogTitle"))
(def CircularProgress (aget js/MaterialUI "CircularProgress"))

(defview publish-dialog []
  (letsubs [{:keys [in-progress? hash] :as publish} [:get :publish]]
    [:> Dialog {:open (not (nil? publish)) :on-close #(re-frame/dispatch [:set :publish nil])}
     [:> DialogTitle
      "Publish extension"]
     [:div {:style {:padding 20}}
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
            [:div ext-url]]]))]]))