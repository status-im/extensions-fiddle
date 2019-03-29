.PHONY: compile, dev

compile:
	clojure -A:compile

dev:
	clojure -A:dev

deploy-website:
	./_assets/bin/gh-pages.js

clean:
	git clean -d -x -f
