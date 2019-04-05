(ns react-native-web.events
  (:require [re-frame.core :as re-frame]
            [clojure.string :as string]
            [ajax.core :as ajax]
            react-native-web.ethereum
            react-native-web.ethereum.logs))

(def ^:const ipfs-add-url "https://ipfs.infura.io:5001/api/v0/add")
(def ^:const ipfs-add-param-name "extension.event.edn")
(def ^:const ipfs-cat-url "https://ipfs.infura.io/ipfs/")

(re-frame/reg-event-fx
 :extensions/identity-event
 (fn [_ [_ _ {:keys [cb]}]]
   {:dispatch (cb {})}))

(re-frame/reg-fx
 ::alert
 (fn [value] (js/alert value)))

(re-frame/reg-event-fx
 :alert
 (fn [_ [_ _ {:keys [value]}]]
   {::alert value}))

(re-frame/reg-fx
 ::log
 (fn [value] (js/console.log value)))

(re-frame/reg-event-fx
 :log
 (fn [_ [_ _ {:keys [value]}]]
   {::log value}))

(re-frame/reg-fx
 ::schedule-start
 (fn [{:keys [interval on-created on-result]}]
   (let [id (js/setInterval #(on-result {}) interval)]
     (on-created {:value id}))))

(re-frame/reg-event-fx
 :extensions/schedule-start
 (fn [_ [_ _ m]]
   {::schedule-start m}))

(re-frame/reg-fx
 ::schedule-cancel
 (fn [{:keys [value]}]
   (js/clearInterval value)))

(re-frame/reg-event-fx
 :extensions/schedule-cancel
 (fn [_ [_ _ m]]
   {::schedule-cancel m}))

(defn- empty-value? [o]
  (cond
    (seqable? o) (empty? o)
    :else (nil? o)))

(re-frame/reg-event-fx
  :extension/set-app-db
  (fn [{:keys [db]} [_ {id :hook-id} m]]
    {:db (assoc-in db [:extensions/store id] m)}))

(defn put-or-dissoc [db id key value]
  (if (empty-value? value)
    (update-in db [:extensions/store id] dissoc key)
    (assoc-in db [:extensions/store id key] value)))

(re-frame/reg-event-fx
 :store/put
 (fn [{:keys [db]} [_ {id :id} {:keys [key value]}]]
   {:db (put-or-dissoc db id key value)}))

(re-frame/reg-event-fx
 :store/puts
 (fn [{:keys [db]} [_ {id :id} {:keys [value]}]]
   {:db (reduce #(put-or-dissoc %1 id (:key %2) (:value %2)) db value)}))

(defn- append [acc k v]
  (let [o (get acc k)]
    (assoc acc k (conj (if (vector? o) o (vector o)) v))))

(re-frame/reg-event-fx
 :store/append
 (fn [{:keys [db]} [_ {id :id} {:keys [key value]}]]
   {:db (update-in db [:extensions/store id] append key value)}))

(re-frame/reg-event-fx
 :store/clear
 (fn [{:keys [db]} [_ {id :id} {:keys [key]}]]
   {:db (update-in db [:extensions/store id] dissoc key)}))

(re-frame/reg-event-fx
 :store/clear-all
 (fn [{:keys [db]} [_ {id :id} _]]
   {:db (update db :extensions/store dissoc id)}))

(defn- json? [res]
  (when-let [type (get-in res [:headers "content-type"])]
    (string/starts-with? type "application/json")))

(defn- parse-json [o]
  (when o
    (js->clj (js/JSON.parse o) :keywordize-keys true)))

(re-frame/reg-fx
 ::json-parse
 (fn [{:keys [value on-result]}]
   (on-result {:value (parse-json value)})))

(re-frame/reg-event-fx
 :extensions/json-parse
 (fn [_ [_ _ m]]
   {::json-parse m}))

(re-frame/reg-fx
 ::json-stringify
 (fn [value on-result]
   (on-result {:value (js/JSON.stringify (clj->js value))})))

(re-frame/reg-event-fx
 :extensions/json-stringify
 (fn [_ [_ _ {:keys [value]}]]
   {::json-stringify value}))

(defn- parse-result [result on-success]
  (let [res (try (parse-json result) (catch js/Error _))]
    (on-success {:body (or res result)})))

(re-frame/reg-event-fx
 :http/get
 (fn [_ [_ _ {:keys [url on-success on-failure timeout]}]]
   (ajax/GET url {:with-credentials? false
                  :response-format   :text
                  :handler           #(when on-success (parse-result (str %) on-success))
                  :error-handler     on-failure})
   nil))

(re-frame/reg-event-fx
 :http/post
 (fn [_ [_ _ {:keys [url body on-success on-failure timeout]}]]
   (ajax/POST url {:with-credentials? false
                   :body              (clj->js body)
                   :response-format   :text
                   :handler           #(when on-success (parse-result (str %) on-success))
                   :error-handler     on-failure})
   nil))

(defn- parse-ipfs-add-response [res]
  (let [{:keys [Name Hash Size]} (parse-json res)]
    {:name Name
     :hash Hash
     :size Size}))

(re-frame/reg-event-fx
 :ipfs/add
 (fn [_ [_ _ {:keys [value on-success on-failure]}]]
   (let [formdata (doto
                   (js/FormData.)
                   (.append ipfs-add-param-name value))]
     (ajax/POST ipfs-add-url {:with-credentials? false
                              :body              formdata
                              :response-format   :text
                              :handler           #(on-success {:value (parse-ipfs-add-response %)})
                              :error-handler     on-failure}))
   nil))

(re-frame/reg-event-fx
 :ipfs/cat
 (fn [_ [_ _ {:keys [hash on-success on-failure]}]]
   (ajax/GET (str ipfs-cat-url hash) {:with-credentials? false
                                      :response-format   :text
                                      :handler           #(on-success {:value %})
                                      :error-handler     on-failure})
   nil))

(re-frame/reg-event-fx
 :extensions.chat.command/set-parameter
 (fn [_ [_ _ {:keys [value]}]]
   nil #_{:dispatch [:chat.ui/set-command-parameter value]}))

(re-frame/reg-event-fx
 :extensions.chat.command/set-custom-parameter
 (fn [{{:keys [current-chat-id] :as db} :db} [_ _ {:keys [key value]}]]
   nil #_{:db (assoc-in db [:chats current-chat-id :custom-params key] value)}))

(re-frame/reg-event-fx
 :extensions.chat.command/set-parameter-with-custom-params
 (fn [{{:keys [current-chat-id] :as db} :db} [_ _ {:keys [value params]}]]
   {:db (-> db
            (update-in [:extension-props :params] merge params)
            (assoc-in [:extension-props :suggestion-id] nil))}))

(re-frame/reg-event-fx
 :extensions.chat.command/send-plain-text-message
 (fn [_ [_ _ {:keys [value]}]]
   nil #_{:dispatch [:chat/send-plain-text-message value]}))

(re-frame/reg-event-fx
 :extensions.chat.command/send-message
 (fn [{{:keys [current-chat-id] :as db} :db :as cofx} [_ {:keys [hook-id]} {:keys [params]}]]
   nil #_(when hook-id
           (when-let [command (last (first (filter #(= (ffirst %) (name hook-id)) (:id->command db))))]
             (commands-sending/send cofx current-chat-id command params)))))

(re-frame/reg-event-fx
 :extensions/show-selection-screen
 (fn [cofx [_ _ {:keys [on-select] :as params}]]
   nil #_(navigation/navigate-to-cofx cofx
                                      :selection-modal-screen
                                      (assoc params :on-select #(do
                                                                  (re-frame/dispatch [:navigate-back])
                                                                  (re-frame/dispatch (on-select %)))))))

(defn operation->fn [k]
  (case k
    :plus +
    :minus -
    :times *
    :divide /))

(re-frame/reg-fx
 ::arithmetic
 (fn [{:keys [operation values on-result]}]
   (on-result {:value (apply (operation->fn operation) values)})))

(re-frame/reg-event-fx
 :extensions/arithmetic
 (fn [_ [_ _ m]]
   {::arithmetic m}))

(re-frame/reg-event-fx
 :extensions/open-url
 (fn [cofx [_ _ {:keys [url]}]]
   (.open js/window url "_blank")
   nil))

(def all {'identity
          {:permissions [:read]
           :data        :extensions/identity-event
           :arguments   {:cb :event}}
          'alert
          {:permissions [:read]
           :data        :alert
           :arguments   {:value :string}}
          'log
          {:permissions [:read]
           :data        :log
           :arguments   {:value :string}}
          'arithmetic
          {:permissions [:read]
           :data        :extensions/arithmetic
           :arguments   {:values    :vector
                         :operation {:one-of #{:plus :minus :times :divide}}
                         :on-result :event}}

          ;;BROWSER
          'browser/open-url
          {:permissions [:read]
           :data        :extensions/open-url
           :arguments   {:url :string}}

          ;;SCHEDULE
          'schedule/start
          {:permissions [:read]
           :data        :extensions/schedule-start
           :arguments   {:interval   :number
                         :on-created :event
                         :on-result  :event}}
          'schedule/cancel
          {:permissions [:read]
           :data        :extensions/schedule-cancel
           :arguments   {:value :number}}

          ;;JSON
          'json/parse
          {:permissions [:read]
           :data        :extensions/json-parse
           :arguments   {:value     :string
                         :on-result :event}}
          'json/stringify
          {:permissions [:read]
           :data        :extensions/json-stringify
           :arguments   {:value     :string
                         :on-result :event}}

          ;;STORE
          'store/put
          {:permissions [:read]
           :data        :store/put
           :arguments   {:key :string :value :any}}
          'store/puts
          {:permissions [:read]
           :data        :store/puts
           :arguments   {:value :vector}}
          'store/append
          {:permissions [:read]
           :data        :store/append
           :arguments   {:key :string :value :any}}
          'store/clear
          {:permissions [:read]
           :data        :store/clear
           :arguments   {:key :string}}
          'store/clear-all
          {:permissions [:read]
           :data        :store/clear-all}

          ;;HTTP
          'http/get
          {:permissions [:read]
           :data        :http/get
           :arguments   {:url         :string
                         :timeout?    :string
                         :on-success  :event
                         :on-failure? :event}}
          'http/post
          {:permissions [:read]
           :data        :http/post
           :arguments   {:url         :string
                         :body        :string
                         :timeout?    :string
                         :on-success  :event
                         :on-failure? :event}}

          ;;IPFS
          'ipfs/cat
          {:permissions [:read]
           :data        :ipfs/cat
           :arguments   {:hash        :string
                         :on-success  :event
                         :on-failure? :event}}
          'ipfs/add
          {:permissions [:read]
           :data        :ipfs/add
           :arguments   {:value       :string
                         :on-success  :event
                         :on-failure? :event}}

          ;;ETHEREUM

          'ethereum/call
          {:permissions [:read]
           :data        :extensions/ethereum-call
           :arguments   {:to          :string
                         :method      :string
                         :params?     :vector
                         :outputs?    :vector
                         :on-success  :event
                         :on-failure? :event}}

          'ethereum/send-transaction
          {:permissions [:read]
           :data        :extensions/ethereum-send-transaction
           :arguments   {:to          :string
                         :gas?        :string
                         :gas-price?  :string
                         :value?      :string
                         :method?     :string
                         :params?     :vector
                         :nonce?      :string
                         :on-success? :event
                         :on-failure? :event}}

          ;;TODO not implemented
          'selection-screen
          {:permissions [:read]
           :data        :extensions/show-selection-screen
           :arguments   {:items :vector :on-select :event :render :view :title :string :extractor-key :keyword}}

          ;;CHAT
          'chat.command/set-parameter
          {:permissions [:read]
           :data        :extensions.chat.command/set-parameter
           :arguments   {:value :any}}
          'chat.command/set-custom-parameter
          {:permissions [:read]
           :data        :extensions.chat.command/set-custom-parameter
           :arguments   {:key :keyword :value :any}}
          'chat.command/set-parameter-with-custom-params
          {:permissions [:read]
           :data        :extensions.chat.command/set-parameter-with-custom-params
           :arguments   {:value :string :params :map}}
          'chat.command/send-plain-text-message
          {:permissions [:read]
           :data        :extensions.chat.command/send-plain-text-message
           :arguments   {:value :string}}
          'chat.command/send-message
          {:permissions [:read]
           :data        :extensions.chat.command/send-message
           :arguments   {:params :map}}
          'chat.command/open-public-chat
          {:permissions [:read]
           :value       :extensions.chat.command/open-public-chat
           :arguments   {:topic :string :navigate-to :boolean}}

          ;;CAMERA
          'camera/picture
          {:permissions [:read]
           :value       :extensions/camera-picture
           :arguments   {:on-success  :event
                         :on-failure? :event}}
          'camera/qr-code
          {:permissions [:read]
           :value       :extensions/camera-qr-code
           :arguments   {:on-success  :event
                         :on-failure? :event}}

          ;;ETHEREUM

          'ethereum/sign
          {:permissions [:read]
           :data        :extensions/ethereum-sign
           :arguments   {:message?    :string
                         :data?       :string
                         :on-success  :event
                         :on-failure? :event}}

          'ethereum/transaction-receipt
          {:permissions [:read]
           :data        :extensions/ethereum-transaction-receipt
           :arguments   {:value        :string
                         :topics-hints :vector
                         :on-success   :event
                         :on-failure?  :event}}
          'ethereum/await-transaction-receipt
          {:permissions [:read]
           :data        :extensions/ethereum-await-transaction-receipt
           :arguments   {:value        :string
                         :interval     :number
                         :topics-hints :vector
                         :on-success   :event
                         :on-failure?  :event}}

          ;;TODO What is for?
          'ethereum/create-address
          {:permissions [:read]
           :data        :extensions/ethereum-create-address
           :arguments   {:on-result :event}}

          'ethereum/logs
          {:permissions [:read]
           :data        :extensions/ethereum-logs
           :arguments   {:from?       :string
                         :to?         :string
                         :address?    :vector
                         :topics?     :vector
                         :block-hash? :string
                         :on-success  :event
                         :on-failure? :event}}
          'ethereum/create-filter
          {:permissions [:read]
           :data        :extensions/ethereum-create-filter
           :arguments   {:type        {:one-of #{:filter :block :pending-transaction}}
                         :from?       :string
                         :to?         :string
                         :address?    :vector
                         :topics?     :vector
                         :block-hash? :string
                         :on-success  :event
                         :on-failure? :event}}
          'ethereum/logs-changes
          {:permissions [:read]
           :data        :extensions/ethereum-logs-changes
           :arguments   {:id           :string
                         :topics-hints :vector}}
          'ethereum/cancel-filter
          {:permissions [:read]
           :data        :extensions/ethereum-cancel-filter
           :arguments   {:id :string}}

          ;;ENS
          'ethereum.ens/resolve
          {:permissions [:read]
           :data        :extensions/ethereum-resolve-ens
           :arguments   {:name        :string
                         :on-success  :event
                         :on-failure? :event}}

          ;;ERC20 Tokens
          'ethereum.erc20/total-supply
          {:permissions [:read]
           :data        :extensions/ethereum-erc20-total-supply
           :arguments   {:contract    :string
                         :on-success  :event
                         :on-failure? :event}}
          'ethereum.erc20/balance-of
          {:permissions [:read]
           :data        :extensions/ethereum-erc20-balance-of
           :arguments   {:contract    :string
                         :token-owner :string
                         :on-success  :event
                         :on-failure? :event}}
          'ethereum.erc20/transfer
          {:permissions [:read]
           :data        :extensions/ethereum-erc20-transfer
           :arguments   {:contract    :string
                         :to          :string
                         :value       :number
                         :on-success  :event
                         :on-failure? :event}}
          'ethereum.erc20/transfer-from
          {:permissions [:read]
           :data        :extensions/ethereum-erc20-transfer-from
           :arguments   {:contract    :string
                         :from        :string
                         :to          :string
                         :value       :number
                         :on-success  :event
                         :on-failure? :event}}
          'ethereum.erc20/approve
          {:permissions [:read]
           :data        :extensions/ethereum-erc20-approve
           :arguments   {:contract    :string
                         :spender     :string
                         :value       :number
                         :on-success  :event
                         :on-failure? :event}}
          'ethereum.erc20/allowance
          {:permissions [:read]
           :data        :extensions/ethereum-erc20-allowance
           :arguments   {:contract    :string
                         :token-owner :string
                         :spender     :string
                         :on-success  :event
                         :on-failure? :event}}


          ;; ERC721 NFT Collactables
          'ethereum.erc721/owner-of
          {:permissions [:read]
           :data        :extensions/ethereum-erc721-owner-of
           :arguments   {:contract    :string
                         :token-id    :string
                         :on-success  :event
                         :on-failure? :event}}
          'ethereum.erc721/is-approved-for-all
          {:permissions [:read]
           :data        :extensions/ethereum-erc721-is-approved-for-all
           :arguments   {:contract    :string
                         :owner       :string
                         :operator    :string
                         :on-success  :event
                         :on-failure? :event}}
          'ethereum.erc721/get-approved
          {:permissions [:read]
           :data        :extensions/ethereum-erc721-get-approved
           :arguments   {:contract    :string
                         :token-id    :string
                         :on-success  :event
                         :on-failure? :event}}
          'ethereum.erc721/set-approval-for-all
          {:permissions [:read]
           :data        :extensions/ethereum-erc721-set-approval-for-all
           :arguments   {:contract    :string
                         :operator    :string
                         :approved    :boolean
                         :on-success  :event
                         :on-failure? :event}}
          'ethereum.erc721/safe-transfer-from
          {:permissions [:read]
           :data        :extensions/ethereum-erc721-safe-transfer-from
           :arguments   {:contract    :string
                         :from        :string
                         :to          :string
                         :token-id    :string
                         :data?       :string
                         :on-success  :event
                         :on-failure? :event}}

          ;;SHH

          'ethereum/shh_post
          {:permissions [:read]
           :data        :extensions/shh-post
           :arguments   {:from?       :string
                         :to?         :string
                         :topics      :vector
                         :payload     :string
                         :priority    :string
                         :ttl         :string
                         :on-success  :event
                         :on-failure? :event}}
          'ethereum/shh-new-identity
          {:permissions [:read]
           :data        :extensions/shh-new-identity
           :arguments   {:on-success  :event
                         :on-failure? :event}}
          'ethereum/shh-has-identity
          {:permissions [:read]
           :value       :extensions/shh-has-identity
           :arguments   {:address     :string
                         :on-success  :event
                         :on-failure? :event}}
          'ethereum/shh-new-group
          {:permissions [:read]
           :data        :extensions/shh-new-group
           :arguments   {:on-success  :event
                         :on-failure? :event}}
          'ethereum/shh-add-to-group
          {:permissions [:read]
           :data        :extensions/shh-add-to-group
           :arguments   {:address     :string
                         :on-success  :event
                         :on-failure? :event}}
          'ethereum/shh_new-filter
          {:permissions [:read]
           :data        :extensions/shh-new-filter
           :arguments   {:to?         :string
                         :topics      :vector
                         :on-success  :event
                         :on-failure? :event}}
          'ethereum/shh-uninstall-filter
          {:permissions [:read]
           :data        :extensions/shh-uninstall-filter
           :arguments   {:id :string}}
          'ethereum/shh-get-filter-changes
          {:permissions [:read]
           :data        :extensions/shh-get-filter-changes
           :arguments   {:id :string}}
          'ethereum/shh-get-messages
          {:permissions [:read]
           :data        :extensions/shh-get-messages
           :arguments   {:id :string}}})
