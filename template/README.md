# {{package.name}} [![npm](https://img.shields.io/npm/v/{{package.name}}.svg?style=flat-square)](https://www.npmjs.com/package/{{package.name}})

[![Gitter](https://img.shields.io/gitter/room/{{user.github}}/help.svg?style=flat-square)](https://gitter.im/{{user.github}}/help)

[![CircleCI](https://img.shields.io/circleci/project/{{user.github}}/{{package.name}}.svg?style=flat-square&label=nix-build)](https://circleci.com/gh/{{user.github}}/{{package.name}})
[![AppVeyor](https://img.shields.io/appveyor/ci/{{user.github}}/{{package.name}}.svg?style=flat-square&label=win-build)](https://ci.appveyor.com/project/{{user.github}}/{{package.name}})
[![Coverage](https://img.shields.io/codecov/c/github/{{user.github}}/{{package.name}}.svg?style=flat-square)](https://codecov.io/github/{{user.github}}/{{package.name}}?branch=master)
[![Dependencies](https://img.shields.io/david/{{user.github}}/{{package.name}}.svg?style=flat-square)](https://david-dm.org/{{user.github}}/{{package.name}})
[![Dev Dependencies](https://img.shields.io/david/dev/{{user.github}}/{{package.name}}.svg?style=flat-square)](https://david-dm.org/{{user.github}}/{{package.name}}#info=devDependencies)

React component-wrapper to swap one element with another and back, useful to show/hide popups, expand/collapse elements, various toggles, etc.

## Installation

### NPM
```sh
npm install --save react {{package.name}}
```

Don't forget to manually install peer dependencies (`react`) if you use npm@3.


### Bower:
```sh
bower install --save https://npmcdn.com/{{package.name}}/bower.zip
```


### 1998 Script Tag:
```html
<script src="https://npmcdn.com/react/dist/react.js"></script>
<script src="https://npmcdn.com/{{package.name}}/build/{{package.name}}.js"></script>
(Module exposed as `{{package.global}}`)
```


## Demo

[http://{{user.github}}.github.io/{{package.name}}](http://{{user.github}}.github.io/{{package.name}})

## Codepen demo

```js
// TODO
```

## Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import {{curly.left}}{{package.global}}{{curly.right}} from '{{package.name}}';

const App = () => (
  <div>
    <{{package.global}} />
  </div>
);

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);
```

## Options

```js
// TODO
```

## Development and testing

Currently is being developed and tested with the latest stable `Node {{node.major}}` on `OSX` and `Windows`.

To run example covering all `{{package.global}}` features, use `npm start dev`, which will compile `src/example/Example.js`

```bash
git clone git@github.com:{{user.github}}/{{package.name}}.git
cd {{package.name}}
npm install
npm start dev

# then
open http://localhost:8080
```

## Tests

```bash
# to run tests
npm start test

# to generate test coverage (./reports/coverage)
npm start test.cov

# to run end-to-end tests
npm start test.e2e
```

## License

MIT
