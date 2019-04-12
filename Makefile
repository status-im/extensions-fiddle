.PHONY: compile, dev, deploy-website

init: clean install
	echo "Ready"

install:
	yarn

compile:
	clojure -A:compile

dev:
	clojure -A:dev

deploy-website: install compile
	$(eval VERSION = $(shell git rev-parse --short HEAD))
	$(eval MESSAGE = 'Deploying \#$(VERSION)')
	./node_modules/gh-pages/bin/gh-pages.js --dotfiles --message ${MESSAGE} --dist resources/public

clean:
	rm -rf target/ node_modules/ .cpcache/ resources/public/js/compiled/
