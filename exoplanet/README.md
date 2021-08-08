# How to build and run application

## Clone repo

git clone https://github.com/phuong144/NortonASG.git

## Install dependencies

npm install

## Without docker || kubernetes

### To view program

npm start

### To run tests

npm test

## Single docker container setup

### Build docker image

docker build -t react-docker-k8s .

### Run docker image

docker run -d -p 8080:80 react-docker-k8s:latest

### Visit http://localhost:8080/

## Kubernetes replication setup with deployed docker public image

### Deploy cluster

kubectl apply -f deployment.yml

### Bind port from 8080 to 80

kubectl port-forward deployment/react-docker-k8s 8080:80

### Visit http://localhost:8080/

# Local Dev Setup

## Build and run docker locally

### Build docker image

docker build -t react-docker-k8s .

### Run docker image

docker run -d -p 8080:80 react-docker-k8s:latest

### Visit http://localhost:8080/

## Publish docker image to public docker hub

### Tag docker image

docker tag react-docker-k8s phuong144/react-docker-k8s

### Push image to public docker hub

docker push phuong144/react-docker-k8s

## Deploy container to Kubernetes cluster

### Deploy cluster

kubectl apply -f deployment.yml

### Verify deployment

kubectl get deployment

### Verify pods are running

kubectl get pods

### Bind port from 8080 to 80

kubectl port-forward deployment/react-docker-k8s 8080:80

### Visit http://localhost:8080/

### Spec

The number of orphan planets (no star).
The name (planet identifier) of the planet orbiting the hottest star.
A timeline of the number of planets discovered per year grouped by size. Use the following groups: “small” is less than 1 Jupiter radii, “medium” is less than 2 Jupiter radii, and anything bigger is considered “large”. For example, in 2004 we discovered 2 small planets, 5 medium planets, and 0 large planets.

### Dataset

https://gist.githubusercontent.com/joelbirchler/66cf8045fcbb6515557347c05d789b4a/raw/9a196385b44d4288431eef74896c0512bad3defe/exoplanets

### Dataset Documentation

https://github.com/OpenExoplanetCatalogue/oec_tables/blob/master/FIELDS.md