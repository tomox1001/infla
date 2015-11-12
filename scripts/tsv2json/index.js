var path = require('path');
var fs = require('fs');
tsv = require('node-tsv-json');

var routesPath = path.join(__dirname, 'data');

console.log('convert start!!!');

fs.readdirSync(routesPath).forEach(function(file) {
    var ext = path.extname(file);

    if (ext !== '.tsv') {
        return;
    }

    var fileName = file.replace(ext, '');

    console.log('target:' + file);

    tsv({
        input: './data/' + file, 
        output: './data/' + fileName + '.json',
        parseRows: false,
    }, function(err, result) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    });

});

console.log('convert end!!!');
