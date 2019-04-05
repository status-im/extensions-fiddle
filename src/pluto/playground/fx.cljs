(ns pluto.playground.fx
  (:require [re-frame.core :as re-frame]
            [pluto.core :as pluto]
            [reagent.core :as reagent]
            [react-native-web.hooks :as hooks]
            [pluto.playground.ipfs :as ipfs]
            [pluto.storages :as storages]))

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
  {:db (assoc db :data data)
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
  {:db             (assoc db :source data)
   :extension/read [ctx data]})

(re-frame.core/reg-event-fx
  :extension/update-source
  update-extension-source)

(re-frame.core/reg-fx
 :extension/set-cm-value
 (fn [[cm source]]
   (when (and cm source)
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
  {:db (assoc-in db [:publish :in-progress?] true)
   :extension/publish-to-ipfs (:source db)}))

(re-frame.core/reg-fx
 :fetch-extension-fx
 (fn []
   (let [hash (.get (.-searchParams (js/URL. js/document.location)) "hash")
         uri (if hash (str "ipfs@" hash) "url@assets/extensions/command/")]
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
   {:db (dissoc db :examples :extensions/properties :extensions/properties :extension-selection :extensions/store)
    :set-url-fx hash
    :dispatch [:fetch-extension]}))

(re-frame.core/reg-event-fx
  :extension/set-properties
  (fn [{:keys [db]} [_ id m]]
    {:db (assoc-in db [:extensions/properties id] m)}))

(re-frame/reg-event-fx
 :extension/set-app-db
 (fn [{:keys [db]} [_ m]]
   {:db (assoc-in db [:extensions/store "Extension ID"] m)}))
