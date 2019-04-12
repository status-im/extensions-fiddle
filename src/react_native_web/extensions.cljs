(ns react-native-web.extensions
  (:require [react-native-web.components :as components]
            [react-native-web.events :as events]
            [react-native-web.queries :as queries]))

(def capacities
  {:components components/all
   :queries    queries/all
   :events     events/all
   :hooks      {:profile.settings
                {:properties
                 {:label     :string
                  :view      :view
                  :on-open?  :event
                  :on-close? :event}}
                :wallet.settings
                {:properties
                 {:label     :string
                  :view      :view
                  :on-open?  :event
                  :on-close? :event}}
                :chat.command
                {:properties
                 {:description?   :string
                  :scope          #{:personal-chats :public-chats :group-chats}
                  :short-preview? :view
                  :preview?       :view
                  :on-send?       :event
                  :on-receive?    :event
                  :on-send-sync?  :event
                  :parameters?    [{:id           :keyword
                                    :type         {:one-of #{:text :phone :password :number}}
                                    :placeholder  :string
                                    :suggestions? :view}]}}}})