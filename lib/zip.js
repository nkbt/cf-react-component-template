const path = require('path');
const fs = require('fs');
const archiver = require('archiver');

const out = fs.createWriteStream(path.join(__dirname, 'template.zip'));
const zip = archiver('zip', {});
zip.directory(path.join(__dirname, '..', 'template'), '.');

zip.on('error', error => console.log(error));
zip.pipe(out);
zip.finalize();
