# Key Value Store

This is a very simple NodeJS webserver that connects to a MongoDB database. The webserver accepts POST, GET and DELETE requests
and stores key/value pairs in the database.

Saving {key} & {value} to MongoDB
> POST /v1/key/{key}/value/{value}

Return the appropriate value in response of the input {key}
> GET  /v1/key/{key}

Delete {key} from MongoDB
> DELETE  /v1/key/{key} 


For this project I've created a Kubernetes cluster and let webserver and MongoDB ran on seperate pods inside that cluster. You
find the yaml files needed for the cluster in the yamlFiles folder.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

An easy way to get started with Kubernetes is Minikube. I used that for this project. Check out the 
[Minikube tutorial](https://kubernetes.io/docs/setup/learning-environment/minikube/).

#### To get the cluster started you need:
* Minikube
* kubectl tool (as mentioned in the Minikube tutorial)
* VirtualBox or VMWare

#### Tool I used for the development:
* NodeJS
* [Visual Studio Code](https://code.visualstudio.com/)
* npm tool
* Git
* Github

#### And to create the pods for Kubernetes:
* Docker
* Docker-compose
* [Kompose](https://github.com/kubernetes/kompose)



## Deployment

### Minikube
Start VirtualBox and open a command line. There you can start a Minikube Kubernetes cluster by typing:

```
minikube start
```
This command create a new single-node Kubernetes cluster. If you have started it before it will just the existing one to start.
You can see the Minikube cluster showing up in your VirtualBox.

To continue you can either use a GUI (Kubernetes Dashboard) by typing:
```
minikube dashboard
```

Or the command line tool kubectl. 


### Kubectl
To deploy pods and services into the Minikube cluster:
```
kubectl create -f <FILE>.yaml
```
Just do this with all the files that are provided in the yamlFiles folder.


### Connecting to Minikube cluster
A very useful command to get the address for the cluster:
```
minikube service -n <namespace> --url <component>
```
* Namespace, like "default"
* Component, like "webserver"

With that address you can use Postman to connect to the REST API and see the results. 


## Tests
The unit tests you can find under in the test directory have been developped using Mocha/Chai module for NodeJS.

### Running the tests
There two ways of testing the webserver app.
* Unit tests
* Tests with an API client (Postman in my case)

Unit tests can be started with from the keyValueStore directory. Just enter:
```
npm test
```

If successful the result should look like this:
```
  Testing status and content of API responses
    Status
      ✓ Status 200 when POST successful
      ✓ Status 200 when GET successful
      ✓ Status 200 when DELETE successful
      ✓ Status 404 when DELETE does not find key
      ✓ Status 404 when GET does not find key
    Content
      ✓ POST response when successful
      ✓ GET response
      ✓ DELETE response


  8 passing (91ms)
```


### Postman
With [Postman](https://www.getpostman.com/) you have a comprehensive tool to test APIs. In the test folder you can find a small
collection of tests to get started and to play around with. Just import the **keyValueStore.postman_collection.json** file into Postman.

You would want to import **Kubernetes Cluster.postman_environment.json** as well which provides an easy way to set up global variables like
the IP address of the cluster. Once imported you can adjust the IP address in the environment setting to the one your cluster uses (see "Connecting to Minikube cluster").


## Authors

* **Christian Tschacher** - *Initial work* 


## License

This project is licensed under the MIT License 
