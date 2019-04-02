.PHONY: compile, dev, deploy-website

install:
	yarn

compile:
	clojure -A:compile

dev:
	clojure -A:dev

deploy-website: install compile
	./node_modules/gh-pages/bin/gh-pages.js --dotfiles --message "Deploying latest version" --dist resources/public

clean:
	rm -rf target node_modules/ .cpcache/
