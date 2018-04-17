

# hello-world-server
ci/cd set up using node + docker + concourse-ci


### Prerequisites

Install docker(https://docs.docker.com/install/)
Install dgoss(https://github.com/aelsabbahy/goss/tree/master/extras/dgoss) -- make sure to use mac osx instructions

```
clone https://github.com/jo-thomas/hello-world-server.git
```

### Part 1: Hello World
I initially thought I would do this assignment in golang after a bit research, it didn't seem feasible if I wanted to finish this in the next few days. Excited to eventually look into it.

I landed on nodejs, though I haven’t written much js I have spent quite a bit of time building and deploying js code.

* express.js as the webserver framework
* swagger-ui to make the api documentation easier.
* configured in package.json to run with npm start

```
> cd hello-world-server
> docker build -t hello-world-server .
> docker run -p 8080:8080 -d hello-world-server
```

Server will be available at http://localhost:8080/
Documentation is available at http://localhost:8080/api-docs


### Part 2: Testing Your Application and Container

* mocha and chai for the testing, this was probably the part that took me the longest, deciding on a tool so many options and even more ways to do it.
* Tests are configure in package.json to run with nom test

Testing the application:
```
> cd hello-world-server
> docker build -t hello-world-server .
> docker build -t hello-world-server-test -f dockerfile.test .
> docker run --rm hello-world-server-test
```

* dgoss is a fantastic tool. I used goss edit to generate the goss.yaml.
```
> dgoss edit -p 8080:8080 -d hello-world-server -- opens up sh within the container
> goss -a to add checks
> goss validate //to make sure tests pass
exit shell a goss.yml will be copied from the container to your workspace
```
Testing the container:
```
> cd hello-world-server
> docker build -t hello-world-server .
> dgoss run -p 8080:8080 -d hello-world-server
```

### Part 3:  Continuous Integration

Started walking through tutorials and I am taking a deeper dive into the documentation.

Setup local concourse-ci instance, this starts a postgres db, concourse ci server, private docker registry
```
> cd concourse-docker
> docker-compose -f docker-compose.yml up
```

Set up fly cli
```
navigate to localhost:80, should be greeted with the concourse-ci ui
click download cli for os of mac
> install <pathtodownload>/fly /usr/local/bin
> fly -version //verify succesfully installed
```

localhost:80 should return concourse-ci
http://localhost:5000/v2/_catalog should return empty repository json
Additional Test for local registry:
```
> cd hello-world-server
> docker tag hello-world-server:latest localhost:5000/hello-world-server:latest
> docker push localhost:5000/hello-world-server:latest
http://localhost:5000/v2/_catalog should return updated json
```


Setting up Pipeline, create a pipeline called hello-world-server, using pipeline.yml
```
> cd hello-world-server
> fly --target hello-world-server login --concourse-url http://localhost:80
> fly sp -t hello-world-server -c pipeline.yml -p hello-world-server //set pipeline
> fly up -t hello-world-server -p hello-world-server //unpause pipeline
```

Navigate to http//:localhost:80, select login at top right, select Team as main, click login button
hello-world-server pipeline should be displayed

Currently is the pipeline is setup to pull source-code, build & test, package Container
The goal of the pipeline was to do

source-code -> Test Code    -> Run Integration Test -> publish to registry -> Deploy 
            -> Test Container
#

Blockers:
* Publish to registry is giving me issue I beleive its because its a insecure registry and connecting to it using the docker-resourse-image isnt returning the appropriate results.
Might have been easier just sticking to dockerhub.


Shut it Down
```
> cd concourse-docker
> docker-compose -f docker-compose.yml down --remove-orphans
```
