(ns pluto.playground.components.dialogs
  (:require-macros [react-native-web.views :refer [defview letsubs]])
  (:require [clojure.edn :as edn]
            [fipp.edn :as fipp]
            [re-frame.core :as re-frame]
            [react-native-web.react :as react]
            [pluto.playground.components.source :as source]
            [status-im.colors :as colors]
            [pluto.playground.components.material-ui :as material-ui]
            [clojure.string :as string]))

(def examples-data
  [{:header "General"}
   {:name "Components" :hash "QmadX7aF2tBaLJjEnNP4Bewc9JZbT5CGjZgKX71MCpvaDS"}
   {:name "Queries" :hash "QmRyL2JJ7HoGQKQfHruWuECUp1bAkbxYjprQgFQGsmns1v"}
   {:name "Events" :hash "QmU9rAboLD23SdCbAxtjtfwwzhbVNcq4tNBe1bGhWHYoZN"}
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

(defview publish []
  (letsubs [{:keys [in-progress? hash] :as publish} [:get :publish]]
    [:> material-ui/Dialog {:open (not (nil? publish)) :on-close #(re-frame/dispatch [:set :publish nil])}
     [:> material-ui/DialogTitle
      "Publish extension"]
     [:div {:style {:padding 20}}
      (if in-progress?
        [:> material-ui/CircularProgress]
        (let [ext-url (str "https://get.status.im/extension/ipfs@" hash "/")]
          [:div {:style {:display :flex :flex-direction :column}}
           [:p {:style {:margin-vertical 5 :font-weight :bold}} "Scan QR to install extension"]
           [:div "Open Status -> Press (+) -> Scan QR "]
           [:div {:style {:display :flex :align-items :center :justify-content :center}}
            [:div {:style {:display :flex :margin 20}}
             [(react/qr-code) {:value ext-url}]]]
           [:div {:style {:display :flex :flex-direction :column}}
            [:div {:style {:margin-vertical 5 :font-weight :bold}} "OR"]
            [:div {:style {:margin-vertical 5}}
             "share extension"
             [:a {:style {:margin-left 10} :href ext-url} "URL"]]]]))]]))

(defn example-item [{:keys [name hash header]}]
  (if header
    [:div {:style {:font-size 16 :font-weight :bold :padding-bottom 10 :padding-top 10}} header]
    [:div {:style {:padding 5 :cursor :pointer} :on-click #(re-frame/dispatch [:open-example hash])}
     [:div {:style {:font-size 15}} name]
     [:div {:style {:font-size 12 :color colors/gray}} hash]]))

(defview examples []
  (letsubs [show? [:get :examples]]
    [:> material-ui/Dialog {:open (boolean show?) :on-close #(re-frame/dispatch [:set :examples nil])}
     [:> material-ui/DialogTitle
      "Extensions examples"]
     [:div {:style {:padding 20 :overflow :auto}}
      (for [item examples-data]
        ^ {:key item}
        [example-item item])]]))

(defview app-db-browser []
  (letsubs [browse [:get :browse-app-db]
            m [:store/all]]
    [:> material-ui/Dialog {:open (boolean browse) :on-close #(re-frame/dispatch [:set :browse-app-db false])}
     [:> material-ui/DialogTitle
      "Edit local app-db"]
     [:div {:style {:padding 20 :display :flex :min-width 500 :height "80vh"}}
      [source/editor2 {:content   (with-out-str (fipp/pprint (or m {})))
                       :on-change #(re-frame/dispatch [:extension/set-app-db (edn/read-string %)])}]]]))

(defview add-edn-item []
  (letsubs [{:keys [item-name item-type] :as item} [:get :add-edn-item]]
    [:> material-ui/Dialog {:open (boolean item) :on-close #(re-frame/dispatch [:set :add-edn-item nil])}
     [:> material-ui/DialogTitle
      "Add item"]
     [:div {:style {:padding 20 :display :flex :min-width 500 :height "80vh" :flex 1 :flex-direction :column}}
      [:div {:style {:display :flex :flex-direction :row :align-items :center}}
       [:div {:style {:margin-right 10}} "Name"]
       [:> material-ui/Input {:on-change #(re-frame/dispatch [:set-in [:add-edn-item :item-name] (.-value (.-target %))])}]]
      [:div {:style {:display :flex :flex-direction :row :align-items :center :margin-top 10}}
       [:div {:style {:margin-right 10}} "Type"]
       [material-ui/select
        {:on-change #(re-frame/dispatch [:set-in [:add-edn-item :item-type] (.-key %2)])
         :selected  item-type
         :options   [{:value "views/" :label "view"}
                     {:value "views/chat" :label "chat command view"}
                     {:value "events/" :label "event"}
                     {:value "hooks/chat.command." :label "chat command hook"}
                     {:value "hooks/wallet.settings." :label "wallet settings hook"}
                     {:value "hooks/profile.settings." :label "profile settings hook"}]}]]
      [:div {:style {:display :flex :flex-direction :row :align-items :center :justify-content :flex-end :margin-top 20}}
       (when (and item-name (not (string/blank? item-name)))
         [material-ui/button {:color "primary" :variant "contained"
                              :on-click #(re-frame/dispatch [:extension/add-edn-item])}
          "Add"])]]]))

(defn- set-properties [id s]
  (try
    (re-frame/dispatch [:extension/set-properties id (edn/read-string s)])
    (catch js/Error _)))

(defview properties-browser []
  (letsubs [browse [:get :browse-properties]
            selection [:extension-selection]]
    (let [m @(re-frame/subscribe [:extension/properties selection])]
      [:> material-ui/Dialog {:open (boolean browse) :on-close #(re-frame/dispatch [:set :browse-properties false])}
       [:> material-ui/DialogTitle
        "Edit properties"]
       [:div {:style {:padding 20 :display :flex :min-width 500 :height "80vh"}}
        [source/editor2 {:content   (with-out-str (fipp/pprint (or m {})))
                         :on-change #(set-properties selection %)}]]])))

(defview selection-screen []
  (letsubs [{:keys [items render title extractor-key on-select] :as params} [:get :selection-screen]]
    [:> material-ui/Dialog {:open (not (nil? params)) :on-close #(re-frame/dispatch [:set :selection-screen nil])}
     [:> material-ui/DialogTitle
      title]
     [:div {:style {:padding 20 :overflow :auto}}
      (for [item items]
        ^{:key item}
        [:div {:style {:padding 5 :cursor :pointer} :on-click  #(do
                                                                  (re-frame/dispatch [:set :selection-screen nil])
                                                                  (on-select item))}
         [render item]])]]))

(defn dialogs []
  [:div
   [publish]
   [examples]
   [app-db-browser]
   [properties-browser]
   [selection-screen]
   [add-edn-item]])