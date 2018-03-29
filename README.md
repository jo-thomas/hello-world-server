

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
cd hello-world-server
docker build -t hello-world-server .
docker run -p 8080:8080 -d hello-world-server
```

Server will be available at http://localhost:8080/
Documentation is available at http://localhost:8080/api-docs


### Part 2: Testing Your Application and Container

* mocha and chai for the testing, this was probably the part that took me the longest, deciding on a tool so many options and even more ways to do it. 
* Tests are configure in package.json to run with nom test

Testing the application:
```
cd hello-world-server
docker build -t hello-world-server .
docker build -t hello-world-server-test -f dockerfile.test .
docker run --rm hello-world-server-test
```

* dgoss is a fantastic tool. I used goss edit to generate the goss.yaml.
```
dgoss edit -p 8080:8080 -d hello-world-server -- opens up sh within the container
goss -a to add checks
goss validate to make sure tests pass
exit shell a goss.yml will be copied from the container to your workspace
```
Testing the container:
```
cd hello-world-server
docker build -t hello-world-server .
dgoss run -p 8080:8080 -d hello-world-server
```

### Part 3:  Continuous Integration

I feel like wrong even looking at a different CI server after all these years of Jenkins. Once I read Pivitol created it, I knew I was in trouble. If its anything like cloud foundry, extremely opinionated, then there will only be one way to do anything. 
Started walking through tutorials and I am taking a deeper dive into the documentation.
