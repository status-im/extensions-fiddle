(ns pluto.playground.fx
  (:require [re-frame.core :as re-frame]
            [pluto.core :as pluto]
            [pluto.playground.ipfs :as ipfs]
            [pluto.storages :as storages]
            [clojure.string :as string]
            [cljs.pprint :as pp]))

(defn get-source-from-sources [sources]
  (let [meta (filter (fn [[key val]] (zero? (string/index-of key "meta"))) sources)
        life (filter (fn [[key val]] (zero? (string/index-of key "lifecycle"))) sources)
        events (filter (fn [[key val]] (zero? (string/index-of key "events/"))) sources)
        views (filter (fn [[key val]] (zero? (string/index-of key "views/"))) sources)
        hooks (filter (fn [[key val]] (zero? (string/index-of key "hooks/"))) sources)]
    (str "{\n"
         (string/join "\n"  (map (fn [[key value]]
                                   (str " " key "\n " (string/replace value #"\n" "\n ")))
                                 (concat meta life events views hooks)))
         "\n}")))

(re-frame/reg-event-db
 :set
 (fn [db [_ k v]]
   (assoc db k v)))

(re-frame/reg-event-db
 :set-in
 (fn [db [_ path v]]
   (assoc-in db path v)))

(defn- update-extension-errors
  [{:keys [db]} [_ errors]]
  {:db (assoc db :errors errors)})

(re-frame/reg-event-fx
 :extension/update-errors
 update-extension-errors)

(defn- clear-errors
  [{:keys [db]} _]
  {:db (dissoc db :errors)})

(re-frame/reg-event-fx
 :extension/clear-errors
 clear-errors)

(defn- update-extension-parsed
  [{:keys [db]} [_ data]]
  {:db (assoc db :parsed data)})

(re-frame/reg-event-fx
 :extension/update-parsed
 update-extension-parsed)

(re-frame/reg-fx
 :extension/parse
 (fn [[ctx data]]
   (let [{:keys [data errors]} (pluto/parse ctx data)]
     (if errors
       (re-frame/dispatch [:extension/update-errors errors])
       (re-frame/dispatch [:extension/update-parsed data])))))

(defn- update-extension-data
  [{:keys [db]} [_ ctx data]]
  {:db              (assoc db :data data)
   :extension/parse [ctx data]})

(re-frame.core/reg-event-fx
 :extension/update-data
 update-extension-data)

(re-frame.core/reg-fx
 :extension/read
 (fn [[ctx source]]
   (re-frame/dispatch [:extension/clear-errors])
   (let [{:keys [data errors]} (pluto/read source)]
     (if errors
       (re-frame/dispatch [:extension/update-errors errors])
       (re-frame/dispatch [:extension/update-data ctx data])))))

(defn- update-extension-source
  [{:keys [db]} [_ ctx data]]
  (if (:simple-mode? db)
    {:db (assoc-in db [:simple-sources (:simple-item db)] data)}
    {:db (assoc db :source data)}))

(re-frame.core/reg-event-fx
 :extension/update-source
 update-extension-source)

(re-frame.core/reg-event-fx
 :extension/read
 (fn [{:keys [db]} [_ ctx]]
   {:extension/read [ctx (get db :source)]}))

(re-frame.core/reg-event-fx
 :extension/run
 (fn [{:keys [db]} [_ ctx]]
   (if (:simple-mode? db)
     (let [source (get-source-from-sources (:simple-sources db))]
       {:db (assoc db :source source)
        :extension/read [ctx source]})
     {:extension/read [ctx (get db :source)]})))

(re-frame.core/reg-fx
 :extension/set-cm-value
 (fn [[cm source]]
   (when source ;(and cm ;;TODO figwheel error
     (.setValue cm source))))

(re-frame.core/reg-event-fx
 :extension/update-editor
 (fn [{:keys [db]} [_ data]]
   {:extension/set-cm-value [(:code-mirror db) data]}))

(defn- append-log
  [{:keys [db]} [_ data]]
  {:db (update db :logs conj data)})

(re-frame.core/reg-event-fx
 :extension/append-log
 append-log)

(defn- switch-filter-logs
  [{:keys [db]} [_ checked]]
  {:db (assoc db :filtered-logs checked)})

(re-frame.core/reg-event-fx
 :extension/switch-filter-logs
 switch-filter-logs)

(defn- clear-logs
  [{:keys [db]} _]
  {:db (dissoc db :logs)})

(re-frame/reg-event-fx
 :extension/clear-logs
 clear-logs)

(defn- set-selected
  [{:keys [db]} [_ path]]
  {:db (assoc db :selected path)})

(re-frame.core/reg-event-fx
 :extension/set-selected
 set-selected)

(defn- switch-preview
  [{:keys [db]} [_]]
  {:db (update db :preview not)})

(re-frame.core/reg-event-fx
 :extension/switch-preview
 switch-preview)

(re-frame.core/reg-fx
 :extension/publish-to-ipfs
 (fn [value]
   (ipfs/save value)))

(re-frame.core/reg-event-fx
 :extension/publish
 (fn [{:keys [db]} _]
   (if (:simple-mode? db)
     (let [source (get-source-from-sources (:simple-sources db))]
       {:db (-> db
                (assoc-in [:publish :in-progress?] true)
                (assoc :source source))
        :extension/publish-to-ipfs source})
     {:db                        (assoc-in db [:publish :in-progress?] true)
      :extension/publish-to-ipfs (:source db)})))

(re-frame.core/reg-fx
 :fetch-extension-fx
 (fn []
   (let [hash (.get (.-searchParams (js/URL. js/document.location)) "hash")
         uri  (if hash (str "ipfs@" hash) "url@assets/extensions/command/")]
     (storages/fetch uri #(re-frame.core/dispatch [:extension/update-editor (get-in % [:value :content])])))))

(re-frame.core/reg-event-fx
 :fetch-extension
 (fn [{:keys [db]} _]
   {:fetch-extension-fx nil
    :dispatch           [:store/clear-all]}))

(re-frame.core/reg-fx
 :set-url-fx
 (fn [hash]
   (ipfs/set-url hash)))

(re-frame.core/reg-event-fx
 :open-example
 (fn [{db :db} [_ hash]]
   {:db         (dissoc db :simple-mode? :examples :extensions/properties :extension-selection :extensions/store :extension-props)
    :set-url-fx hash
    :dispatch   [:fetch-extension]}))

(re-frame.core/reg-event-fx
 :extension/set-properties
 (fn [{:keys [db]} [_ id m]]
   {:db (assoc-in db [:extensions/properties id] m)}))

(re-frame/reg-event-fx
 :extension/set-app-db
 (fn [{:keys [db]} [_ m]]
   {:db (assoc-in db [:extensions/store "Extension ID"] m)}))

(re-frame/reg-event-fx
 :extension/switch-mode
 (fn [{:keys [db]} [_ simple?]]
   (merge {:db (assoc db :simple-mode? simple?)}
          (if simple?
            (let [{:keys [data errors]} (pluto/read (:source db))]
              (when-not errors
                (let [simple-items (into {} (map (fn [[key value]]
                                                   {(str key) (str (with-out-str (pp/pprint value)))})
                                                 data))
                      [first-key first-value] (first simple-items)]
                  {:db                     (-> db
                                               (assoc :simple-mode? simple?)
                                               (assoc :simple-sources simple-items)
                                               (assoc :simple-item first-key))
                   :extension/set-cm-value [(:code-mirror db) first-value]})))
            (let [source (get-source-from-sources (:simple-sources db))]
              {:db (-> db
                       (assoc :source source)
                       (assoc :simple-mode? simple?))
               :extension/set-cm-value [(:code-mirror db) source]})))))

(re-frame/reg-event-fx
 :extension/select-simple-item
 (fn [{:keys [db]} [_ item]]
   {:db                     (assoc db :simple-item item)
    :extension/set-cm-value [(:code-mirror db) (get-in db [:simple-sources item])]}))

(defn get-full-name [item-type item-name]
  (str (case item-type
         "views/chat" "views/"
         item-type)
       (-> item-name
           (string/trim)
           (string/replace #" " "-")
           (string/lower-case))))

(defn get-new-source [item-type]
  (case item-type
    "views/" "[view]"
    "views/chat" "(let [{{{id :id} :params} :content} properties] \n [view \n [text id]])"
    "events/" "[]"
    "hooks/chat.command." "{:description   \"\"\n :scope         #{:personal-chats :public-chats}\n :preview       [preview]\n :short-preview [short-preview]\n :parameters    [{:id          :id\n                  :type        :text\n                  :placeholder \"My placeholder\"\n                  :suggestions [suggestions-view]}]}"
    "hooks/wallet.settings." "{:label   \"\"\n :view    [my-view]}"
    "hooks/profile.settings." "{:label   \"\"\n :view    [my-view]}"))

(re-frame/reg-event-fx
 :extension/add-edn-item
 (fn [{{:keys [add-edn-item] :as db} :db } _]
   (let [{:keys [item-name item-type]} add-edn-item
         full-name (get-full-name item-type item-name)
         new-source (get-new-source item-type)]
     {:db                     (-> db
                                  (dissoc :add-edn-item)
                                  (assoc-in [:simple-sources full-name] new-source)
                                  (assoc :simple-item full-name))
      :extension/set-cm-value [(:code-mirror db) new-source]})))
