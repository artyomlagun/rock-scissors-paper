setup:
	bundle install
	yarn
start:
	rm -Rf ./public/packs
	rails s

.PHONY: setup start