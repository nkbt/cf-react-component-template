# cf-react-component-template [![npm](https://img.shields.io/npm/v/cf-react-component-template.svg?style=flat-square)](https://www.npmjs.com/package/cf-react-component-template)

[![Gitter](https://img.shields.io/gitter/room/nkbt/help.svg?style=flat-square)](https://gitter.im/nkbt/help)

[![CircleCI](https://img.shields.io/circleci/project/nkbt/cf-react-component-template.svg?style=flat-square&label=nix-build)](https://circleci.com/gh/nkbt/cf-react-component-template)
[![Coverage](https://img.shields.io/codecov/c/github/nkbt/cf-react-component-template.svg?style=flat-square)](https://codecov.io/github/nkbt/cf-react-component-template?branch=master)
[![Dependencies](https://img.shields.io/david/nkbt/cf-react-component-template.svg?style=flat-square)](https://david-dm.org/nkbt/cf-react-component-template)
[![Dev Dependencies](https://img.shields.io/david/dev/nkbt/cf-react-component-template.svg?style=flat-square)](https://david-dm.org/nkbt/cf-react-component-template#info=devDependencies)


React component template scaffold

## What does this do?

It scaffolds a new module with the following features:

* ES6 with Babel
* Lint with ESLint
* Tape tests with coverage report
* Ensure dependencies are properly declared in package.json
* Git precommit hook enforces quality checks on commit
* CI config (CircleCI)


## Getting Started

```
npm install -g cf-react-component-template
mkdir project
cd project
cf-react-component-template
npm install
npm test
```
