#! /usr/bin/env node

const fs = require('fs');
try {
  fs.accessSync(require.resolve('./build/unzip'), fs.F_OK);
  require('./build/unzip');
} catch (e) {
  console.log('Unzipping skipped, build folder not found');
}
