(ns pluto.playground.fx
  (:require [re-frame.core :as re-frame]
            [pluto.core :as pluto]
            [reagent.core :as reagent]
            [react-native-web.hooks :as hooks]
            [pluto.playground.ipfs :as ipfs]))

(re-frame/reg-event-db
 :set
 (fn [db [_ k v]]
   (assoc db k v)))

(re-frame/reg-event-db
 :set-in
 (fn [db [_ path v]]
   (assoc-in db path v)))

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
      (reagent/render-component
       (hooks/hook-in (first (:hooks data)))
       (.getElementById js/document "extension"))
      (re-frame/dispatch [:extension/update-parsed data]))))

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
    (let [{:keys [data errors]} (pluto/read source)]
      (re-frame/dispatch [:extension/update-data ctx data]))))

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
  {:db (update db :traces conj data)})

(re-frame.core/reg-event-fx
  :extension/append-log
  append-log)

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