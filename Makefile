server:
	docker run -p 3000:3000 -d cogoo/payments-service

build:
	docker build -t cogoo/payments-service .