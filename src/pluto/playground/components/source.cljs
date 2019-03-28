(ns pluto.playground.components.source
  "A source component based on CodeMirror"
  (:require [reagent.core :as reagent]
            cljsjs.codemirror
            cljsjs.codemirror.mode.clojure
            cljsjs.parinfer
            cljsjs.parinfer-codemirror
            [re-frame.core :as re-frame]))

(defn viewer [{:keys [on-change]}]
  (let [debounce (atom nil)]
    (reagent/create-class
     {:component-did-mount
      (fn [this]
        (let [el (js/CodeMirror. (reagent/dom-node this)
                                 (clj->js
                                  {;:lineNumbers     true (when true editor is slow)
                                   :viewportMargin  js/Infinity
                                   :matchBrackets   true
                                   :styleActiveLine true
                                   :autofocus       true
                                   :mode            "clojure"}))]
          (js/parinferCodeMirror.init el)
          (re-frame/dispatch [:set :code-mirror el])
          (when on-change
            (.on el "change" (fn [_]
                               (when @debounce (js/clearTimeout @debounce))
                               (reset! debounce
                                       (js/setTimeout
                                           #(on-change (.getValue el))
                                           400)))))))
      :reagent-render
      (fn [_]
        [:div {:class "codemirror"}])})))
