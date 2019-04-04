(ns pluto.playground.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :get
 (fn [db [_ k]]
   (get db k)))

(re-frame/reg-sub
 :get-in
 (fn [db [_ path]]
   (get-in db path)))

(defn- extension-parsed
  [db v]
  (:parsed db))

(re-frame/reg-sub
  :extension/parsed
  extension-parsed)

(defn- extension-data
  [db v]
  (:data db))

(re-frame/reg-sub
  :extension/data
  extension-data)

(defn- extension-source
  [db v]
  (:source db))

(re-frame/reg-sub
  :extension/source
  extension-source)

(re-frame/reg-sub
  :extension/logs
  :logs)

(re-frame/reg-sub
  :extension/filtered-logs?
  :filtered-logs)

(re-frame/reg-sub
  :extension/filtered-logs
  :<- [:extension/logs]
  :<- [:extension/filtered-logs?]
  (fn [[logs filtered?]]
    (filter #(if (true? filtered?) (not= (:category %) :pluto.log/trace) true) logs)))

(re-frame/reg-sub
  :extension/errors
  :errors)

(defn- selected
  [db v]
  (:selected db))

(re-frame/reg-sub
  :extension/selected
  selected)

(defn- preview
  [db v]
  (or (:preview db) false))

(re-frame/reg-sub
  :extension/preview
  preview)

(re-frame/reg-sub
  :extension/properties
  (fn [db [_ id _]]
    (get-in db [:extensions/properties id])))
