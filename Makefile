.PHONY: install test

install:
	npm install

test: install
	./node_modules/.bin/mocha --reporter spec
