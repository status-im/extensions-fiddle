(ns react-native-web.ethereum
  (:require [re-frame.core :as re-frame]
            [status-im.abi-spec :as abi-spec]))

(defn rpc-args [method params from]
  {:method method
   :params params
   :from   from})

(defn parse-call-result [o outputs]
  (let [result (get (js->clj o) "result")]
    (cond
      (= "0x" result) nil
      (and outputs result)
      (abi-spec/decode result outputs)
      :else result)))

(defn rpc-dispatch [error result f on-success on-failure]
  (when (and result on-success f)
    (on-success {:value (f result)}))
  (when (and error on-failure)
    (on-failure {:value error})))

(defn- execute-ethcall [{:keys [to method params outputs on-success on-failure]} ethereum-addr]
  (let [tx-object {:to to :data (when method (abi-spec/encode method params))}]
    {:extensions/send-async [(rpc-args "eth_call" [tx-object "latest"] ethereum-addr)
                             #(rpc-dispatch %1 %2 (fn [o] (parse-call-result o outputs)) on-success on-failure)]}))

(defn- execute-send-transaction [{:keys [method params on-success on-failure] :as arguments} ethereum-addr]
  (let [tx-object (assoc (select-keys arguments [:to :gas :gas-price :value :nonce])
                    :from ethereum-addr
                    :data (when (and method params) (abi-spec/encode method params)))]
    {:extensions/send-async [(rpc-args "eth_sendTransaction" [tx-object] ethereum-addr)
                             #(rpc-dispatch %1 %2 (fn [o] (parse-call-result o nil)) on-success on-failure)]}))

(re-frame.core/reg-fx
 :extensions/send-async
 (fn [[obj callback]]
   (.sendAsync js/ethereum (clj->js obj) callback)))

(re-frame/reg-event-fx
 :extensions/ethereum-call
 (fn [{{:keys [ethereum-addr]} :db} [_ _ arguments]]
   (when ethereum-addr
     (execute-ethcall arguments ethereum-addr))))

(re-frame/reg-event-fx
 :extensions/ethereum-send-transaction
 (fn [{{:keys [ethereum-addr]} :db} [_ _ arguments]]
   (when ethereum-addr
     (execute-send-transaction arguments ethereum-addr))))

(re-frame.core/reg-fx
 :extensions/init-wallet-fx
 (fn []
   (when (exists? js/ethereum)
     (-> (.enable js/ethereum)
         (.then #(re-frame/dispatch [:set :ethereum-addr (first (js->clj %))]))
         (.catch #())))))

(re-frame/reg-event-fx
 :extensions/init-wallet
 (fn [_ _]
   {:extensions/init-wallet-fx nil}))