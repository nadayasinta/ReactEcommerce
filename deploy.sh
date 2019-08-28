
sudo docker stop reactecommerce
sudo docker rm reactecommerce
sudo docker rmi nadayasinta/reactecommerce:latest
sudo docker run -d --name reactecommerce -p 3000:80 nadayasinta/reactecommerce:latest
