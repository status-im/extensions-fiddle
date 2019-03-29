IMAGE_TAG = latest
IMAGE_NAME = statusteam/clojure:$(IMAGE_TAG)

build:
	docker build -t $(IMAGE_NAME) .

push: build
	docker push $(IMAGE_NAME)
