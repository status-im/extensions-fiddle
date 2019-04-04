(ns react-native-web.ethereum.logs
  (:require [clojure.string :as string]
            [status-im.abi-spec :as abi-spec]
            [re-frame.core :as re-frame]
            [react-native-web.ethereum :as ethereum]))

(defn- types-mapping [type]
  (cond
    (= "bool" type) :bool
    (string/starts-with? type "uint") :uint
    (string/starts-with? type "int") :int
    (string/starts-with? type "address") :address
    (string/starts-with? type "bytes") :bytes
    (string/starts-with? type "fixed") :bytes
    :else :bytes))

(defn- values-topic-enc [type values]
  (mapv #(str "0x" (abi-spec/enc {:type (types-mapping type) :value %})) values))

(defn- event-topic-enc [event params]
  (let [eventid (str event "(" (string/join "," params) ")")]
    (abi-spec/sha3 eventid)))

(defn- generate-topic [t]
  (cond
    (or (nil? t) (string? t)) t                             ;; nil topic ;; immediate topic (extension encode topic by its own) ;; vector of immediate topics
    (vector? t) (mapv generate-topic t)                     ;; descend in vector elements
    (map? t)                                                ;; simplified topic interface, we need to encode
    (let [{:keys [event params type values]} t]
      (cond
        (some? event) (event-topic-enc event params)        ;; event params topic {:event "Transfer" :params ["uint"]}
        (some? type) (values-topic-enc type values)         ;; indexed values topic
        :else nil))                                         ;; error
    :else nil))

(defn- ensure-hex-bn [block]
  (cond
    (nil? block) block
    (re-matches #"^[0-9]+$" block) (str "0x" (abi-spec/number-to-hex block))
    :else block))

(defn- get-indexed
  "Return a vector with indexed elements"
  [X indexed]
  (let [keys (into [] (take (count X) (range)))]
    (mapv #((zipmap keys X) %) indexed)))

(defn- get-no-indexed
  "Return a vector without indexed elements"
  [X indexed]
  (as-> (into [] (take (count X) (range))) $
        (zipmap $ X)
        (into [] (vals (apply dissoc $ indexed)))))

(defn- decode-data
  "Return a map with all data params decoded"
  [data hint]
  (let [indexes (hint :indexed)
        params (get-no-indexed (hint :params) indexes)
        ;; Exclude indexed params and names from decode in data,
        ;; these are decoded in topics
        names (mapv keyword (get-no-indexed (hint :names) indexes))
        data-values (mapv (partial apply str) (partition 64 (string/replace-first data #"0x" "")))]
    (zipmap names (mapv abi-spec/hex-to-value data-values params))))

(defn- decode-topics
  "This assumes that Topic 0 is filtered and return a map with all topics decoded"
  [topics hint]
  ;; Solidity indexed event params may number up to 3 (max 4 Topics)
  (zipmap [:topic1 :topic2 :topic3] (mapv abi-spec/hex-to-value topics (get-indexed (hint :params) (hint :indexed)))))

(defn- flatten-input
  "Flatten the input of event provided by an developer of extensions and return a 1 depth vector"
  [input]
  (into [] (flatten input)))

(defn- get-hint
  "Return the hint with the specified event (Topic0) from a vector of event hints given by the user"
  [hints first-topic]
  (as-> hints $
        (mapv #(event-topic-enc (% :event) (% :params)) $)
        (.indexOf $ first-topic)
        (get hints $)))

(defn parse-log [events-hints {:keys [address transactionHash blockHash transactionIndex topics blockNumber logIndex removed data]}]
  (merge {:data data
          :topics  topics
          :address address
          :removed removed}

         ;; filter useless topic 0 and decode topics
         (when (and topics (seq events-hints)) {:topics (decode-topics (filterv #(not (= (first topics) %)) topics) (get-hint events-hints (first topics)))})
         (when (and data (seq events-hints)) {:data (decode-data data (get-hint events-hints (first topics)))})
         (when logIndex {:log-index (abi-spec/hex-to-number logIndex)})
         (when transactionIndex {:transaction-index (abi-spec/hex-to-number transactionIndex)})
         (when transactionHash {:transaction-hash transactionHash})
         (when blockHash {:block-hash blockHash})
         (when blockNumber {:block-number (abi-spec/hex-to-number blockNumber)})))

(defn- execute-get-logs [{:keys [from to address topics block-hash on-success on-failure]} ethereum-addr]
  (let [params [{:fromBlock (ensure-hex-bn from)
                 :toBlock   (ensure-hex-bn to)
                 :address   address
                 :topics    (generate-topic topics)
                 :blockhash block-hash}]]
    {:extensions/send-async [(ethereum/rpc-args "eth_getLogs" params ethereum-addr)
                             (fn [error result]
                               (ethereum/rpc-dispatch error result
                                                      (fn [result]
                                                        (let [results (ethereum/parse-call-result result nil)]
                                                          (print results)
                                                          (map #(parse-log (flatten-input topics) %) results)))
                                                      on-success on-failure))]}))

(re-frame/reg-event-fx
 :extensions/ethereum-logs
 (fn [{{:keys [ethereum-addr]} :db} [_ _ arguments]]
   (when ethereum-addr
     (execute-get-logs arguments ethereum-addr))))