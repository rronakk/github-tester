# github-tester

Build Status : [![CircleCI](https://circleci.com/gh/rronakk/github-tester.svg?style=svg)](https://circleci.com/gh/rronakk/github-tester)

Example repo demonstrating the use of [cypress](https://www.cypress.io/) testing tool to run End-to-End automated test.

### Application Under Test :

- Github Sign In and Sign up feature
- Github Gist

### Test Setup and dependencies

Current installation assumes as osx/linux environment.

* Install node 
```
$ brew install node

```
* check the Node and NPM version after successful installation.

```
$ node -v
```
```
npm -v
```
* clone the repo by running the following command
```
mkdir test_workspace; cd test_workspace

git clone https://github.com/rronakk/github-tester.git

cd {your_clone_directory_name}
```

* Install all dependencies
```
npm install
```

### Running Test : Getting Started

Running test is straight forward

To run all tests present in the repo
```
npm run cy:run
```
These will run test in headless mode on electron browser

- To see the test in action (on chrome)
```
npm run cy:open
```
On the browser window select the test you want to run.