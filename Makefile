.PHONY: compile, dev

compile:
	clojure -A:compile

dev:
	clojure -A:dev

publish: compile
	./node_modules/gh-pages/bin/gh-pages.js --dotfiles --message "Deploying latest version" --dist resources/public
