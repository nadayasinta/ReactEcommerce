
docker stop reactecommerce
docker rm reactecommerce
docker rmi nadayasinta/reactecommerce:latest
docker run -d --name reactecommerce -p 3000:80 nadayasinta/reactecommerce:latest
