const path = require('path');
const fs = require('fs');
const unzip = require('unzip');


fs.createReadStream(path.join(__dirname, 'template.zip'))
  .pipe(unzip.Extract({path: path.join(__dirname, '..', 'template')}));
