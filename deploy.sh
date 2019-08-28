#!/bin/bash

eval "$(ssh-agent -s)" &&
ssh-add -k ~/.ssh/id_rsa &&
# git pull

source ~/.profile
echo "$DOCKERHUB_PASS" | docker login --username $DOCKERHUB_USER --password-stdin
docker stop reactecommerce
docker rm reactecommerce
docker rmi nadayasinta/reactecommerce
docker pull
docker run -d --name reactecommerce -p 5000:5000 nadayasinta/reactecommerce:latest
