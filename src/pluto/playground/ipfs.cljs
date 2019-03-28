(ns pluto.playground.ipfs
  (:require [ajax.core :as ajax]
            [re-frame.core :as re-frame]
            [clojure.string :as string]))

(defn set-url [hash]
  (js/history.pushState nil nil
                        (str (first (string/split js/document.location.href #"\?")) "?hash=" hash)))

(defn save [content]
  "Saves content to ipfs"
  (let [form-data (doto
                   (js/FormData.)
                   (.append "extension.edn" content))]
    (ajax/POST
      "https://ipfs.infura.io:5001/api/v0/add"
      {:body            form-data
       :response-format :json
       :keywords?       true
       :handler         (fn [{:keys [Hash]}]
                          (re-frame/dispatch [:set-in [:publish :in-progress?] false])
                          (when Hash
                            (re-frame/dispatch [:set-in [:publish :hash] Hash])
                            (set-url Hash)))
       :error-handler   (fn [x]
                          (re-frame/dispatch [:set-in [:publish :in-progress?] false])
                          (str "ERROR" (js/console.log x)))})))

(defn load [hash handler]
  (ajax/GET (str "https://ipfs.infura.io/ipfs/" hash)
            {:with-credentials? false
             :handler           (when handler #(handler %))}))