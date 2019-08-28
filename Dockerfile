FROM nginx:stable
MAINTAINER nadayasinta  "nada@alterra.id"

RUN mkdir -p /ReactEcommerce
RUN mkdir -p /ReactEcommerce/logs/nginx

COPY default.conf /etc/nginx/conf.d/
COPY . /ReactEcommerce/

WORKDIR /ReactEcommerce
