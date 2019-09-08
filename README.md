# Key Value Store

This is a very simple NodeJS webserver that connects to a MongoDB database. The webserver accepts POST, GET and DELETE requests
and stores key/value pairs in the database.

For this project I've created a Kubernetes cluster and let webserver and MongoDB ran on seperate pods inside that cluster. You
find the yaml files needed for the cluster in the yamlFiles folder.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

An easy way to get started with Kubernetes is Minikube. I used that for this project. Check out the 
[Minikube tutorial](https://kubernetes.io/docs/setup/learning-environment/minikube/).

To get the cluster started you need:
* Minikube
* kubectl tool (as mentioned in the Minikube tutorial)

Other tool I used for the development:
* [Visual Studio Code](https://code.visualstudio.com/)
* npm tool
* Git
* Github

And to create the pods for Kubernetes:
* Docker
* Docker-compose
* [Kompose](https://github.com/kubernetes/kompose)


You can start a Minikube Kubernetes cluster by typing:

```
minikube start
```

To continue you can either use a GUI (Kubernetes Dashboard) by typing:
```
minikube dashboard
```

Or the command line tool kubectl. 



## Running the tests
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


With [Postman](https://www.getpostman.com/) you have a comprehensive tool to test APIs. In the test folder you can find a small
collection of tests to get started and to play around with. Just import the **keyValueStore.postman_collection.json** file into Postman.


## Deployment

```
minikube service -n <namespace> --url <component>
```
* Namespace, like "default"
* Component, like "webserver"


## Authors

* **Christian Tschacher** - *Initial work* 


## License

This project is licensed under the MIT License 


