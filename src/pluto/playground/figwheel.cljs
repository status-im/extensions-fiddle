(ns ^:figwheel-hooks pluto.playground.figwheel
  (:require [re-frame.core :as re-frame]
            [devtools.core :as devtools]
            [pluto.playground.core :as core]))

(enable-console-print!)
(devtools/install!)

(defn ^:before-load before-reload []
  (re-frame/clear-subscription-cache!))

(defn ^:after-load after-reload []
  (core/mount-root))
