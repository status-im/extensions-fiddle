.PHONY: compile, dev

compile:
	clojure -A:compile

dev:
	clojure -A:dev

publish:
	gh-pages --dotfiles --message "Auto generated commit" --dist resources/public
