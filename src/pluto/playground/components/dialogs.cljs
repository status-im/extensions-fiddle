(ns pluto.playground.components.dialogs
  (:require-macros [react-native-web.views :refer [defview letsubs]])
  (:require [re-frame.core :as re-frame]
            [react-native-web.react :as react]
            [cljsjs.material-ui]
            [status-im.colors :as colors]))

(def Dialog (aget js/MaterialUI "Dialog"))
(def DialogTitle (aget js/MaterialUI "DialogTitle"))
(def CircularProgress (aget js/MaterialUI "CircularProgress"))

(defview publish []
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

(def examples-data
  [{:header "General"}
   {:name "Components" :hash "QmadX7aF2tBaLJjEnNP4Bewc9JZbT5CGjZgKX71MCpvaDS"}
   {:name "Queries" :hash "QmRyL2JJ7HoGQKQfHruWuECUp1bAkbxYjprQgFQGsmns1v"}
   {:name "Events" :hash "QmUYEKhnXibFhSQ7rDWcPfBUwFr6A379N7dFtbW6PQZaee"}
   {:header "Chat commands"}
   {:name "Hello world" :hash "QmV8JsEA2fBnjstH3MJzK5SgF9F7qNSyKLo2LapYia5pX4"}
   {:name "Ethereum logs tests" :hash "QmaKKKUgDsJKQJ5Q9BJg8V1SRDhhiKbyyQycoExF3eehUZ"}
   {:name "Status Principles" :hash "QmSvd5iehhrkSCQR12hEyJtJzCjEQo1ax8936BnkBhQi5a"}
   {:name "Gfycat" :hash "QmZCf2WJhSm3wfSLK9Mf4mYY4pmxvyE6RhqmsG1SNhNQfq"}
   {:name "Weasel (one of EthSingapore winner)" :hash "QmZaUniGLGfjy4ggdK3Jhk3xq5b2T126zCYLjk5CTc7yiL"}
   {:name "Aragon integration (one of EthSingapore winner)" :hash "QmeEGtHHBn8p11gjCWPh1EzNaojNtDzLqWCdN2XE3auJDV"}
   {:header "Wallet settings"}
   {:name "Hello world" :hash "QmTgi12UgbAdQgxwCaSJgWcHvtwtaTpoazi5SWRhChKQhK"}
   {:name "Kyber exchange (WIP)" :hash "QmeqDrXwwwesgb6Dj9UurtgX1VoS4h6tApxLTLU1BSD7Vo"}])

(defn example-item [{:keys [name hash header]}]
  (if header
    [:div {:style {:font-size 16 :font-weight :bold :padding-bottom 10 :padding-top 10}} header]
    [:div {:style {:padding 5 :cursor :pointer} :on-click #(re-frame/dispatch [:open-example hash])}
     [:div {:style {:font-size 15}} name]
     [:div {:style {:font-size 12 :color colors/gray}} hash]]))

(defview examples []
  (letsubs [show? [:get :examples]]
    [:> Dialog {:open show? :on-close #(re-frame/dispatch [:set :examples nil])}
     [:> DialogTitle
      "Extensions examples"]
     [:div {:style {:padding 20 :overflow :auto}}
      (for [item examples-data]
        [example-item item])]]))

(defn dialogs []
  [:div
   [publish]
   [examples]])