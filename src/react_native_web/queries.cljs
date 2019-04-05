(ns react-native-web.queries
  (:require [re-frame.core :as re-frame]
            [status-im.tokens :as tokens]))
(re-frame/reg-sub
 :extensions/identity
 (fn [_ [_ _ {:keys [value]}]]
   value))

(re-frame/reg-sub
 :extensions.contacts/all
 (fn [_ _]
   [{:photo "?" :name "Test Name 1" :address "0x00testaddress01" :public-key "0x00testpulickey01"}
    {:photo "?" :name "Test Name 2" :address "0x00testaddress02" :public-key "0x00testpulickey02"}
    {:photo "?" :name "Test Name 3" :address "0x00testaddress03" :public-key "0x00testpulickey03"}]))

(defn get-token-for [network all-tokens token]
  {:decimals 18
   :address  "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"})

(re-frame/reg-sub
 :extensions.wallet/balance
 (fn [_ [_ _ {token :token}]]
   {:value        100
    :value-in-wei 10000000000000}))

(re-frame/reg-sub
 :extensions.wallet/token
 (fn [_ [_ _ {token :token amount :amount}]]
   {:amount 100}))

(re-frame/reg-sub
 :extensions.wallet/tokens
 (fn [_ [_ _ {filter-vector :filter}]]
   (let [tokens (remove :nft? (:mainnet tokens/all-default-tokens))]
     (if filter-vector
       (filter #((set filter-vector) (:symbol %)) tokens)
       tokens))))

(re-frame/reg-sub
 :store/get
 (fn [db [_ {id :id} {:keys [key]}]]
   (get-in db [:extensions/store id key])))

(def all {'identity            {:data :extensions/identity :arguments {:value :map}}
          'store/get           {:data :store/get :arguments {:key :string}}
          'contacts/all        {:data :extensions.contacts/all} ;; :photo :name :address :public-key
          'wallet/collectibles {:data :get-collectible-token :arguments {:token :string :symbol :string}}
          'wallet/balance      {:data :extensions.wallet/balance :arguments {:token :string}}
          'wallet/token        {:data :extensions.wallet/token :arguments {:token :string :amount? :number :amount-in-wei? :number}}
          'wallet/tokens       {:data :extensions.wallet/tokens :arguments {:filter? :vector :visible? :boolean}}})
