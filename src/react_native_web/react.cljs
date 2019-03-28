(ns react-native-web.react
  (:require [reagent.core :as reagent]
            [clojure.string :as string]))

;;TODO when we find a way how to properly use react-native-web npm library we could move this in the separate repository

(defn adapt-class [class]
  (when class
    (reagent/adapt-react-class class)))

(defn get-web-class [name]
  (adapt-class (goog.object/get js/ReactNativeWeb name)))

(defn view-class [] (get-web-class "View"))
(defn text-class [] (get-web-class "Text"))
(defn image [] (get-web-class "Image"))
(defn touchable-highlight [] (get-web-class "TouchableOpacity"))
(defn scroll-view [] (get-web-class "ScrollView"))
(defn text-input-class [] (get-web-class "TextInput"))
(defn activity-indicator [] (get-web-class "ActivityIndicator"))

(defn view [& props]
  (into [] (concat
            [(view-class)]
            (cond-> (into [] props)
                    (and (map? (first props)) (not (contains? (first props) :style)))
                    (assoc 0 {:style (first props)})))))

(defn add-font-style [style-key {:keys [font] :as opts :or {font :default}}]
  (let [font nil;(get-in platform/platform-specific [:fonts (keyword font)])
        style (get opts style-key)]
    (-> opts
        (dissoc :font)
        (assoc style-key (merge style font)))))

(defn transform-to-uppercase [{:keys [uppercase? force-uppercase?] :as opts} ts]
  (if (or force-uppercase?) ;(and uppercase? platform/android?))
    (vec (map string/upper-case ts))
    ts))

(defn text
  ([t]
   [(text-class) t])
  ([opts t & ts]
   (->> (conj ts t)
        (transform-to-uppercase opts)
        (concat [(text-class) (add-font-style :style opts)])
        (vec))))

(defn text-input [{:keys [font style] :as opts
                   :or   {font :default}} text]
  (let [font nil] ;(get-in platform/platform-specific [:fonts (keyword font)])]
    [(text-input-class) (merge
                         {:underline-color-android :transparent
                          ;:placeholder-text-color  colors/text-gray
                          ;:placeholder             (i18n/label :t/type-a-message)
                          :value                   text}
                         (-> opts
                             (dissoc :font)
                             (assoc :style (merge style font))))]))
