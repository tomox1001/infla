var path = require('path');
var fs = require('fs');
var async = require('neo-async');
var tsv = require('node-tsv-json');

var routesPath = path.join(__dirname, 'data');
var array = fs.readdirSync(routesPath);

var iterator = function (file, done) {
    var ext = path.extname(file);
    if (ext !== '.tsv') {
        done();
        return;
    }

    console.log('convert:' + file );

    var fileName = file.replace(ext, '');
    
    tsv({
        input: './data/' + file, 
        output: './data/' + fileName + '.json',
        parseRows: false,
    }, done);
}

async.eachSeries(array, iterator, function(err, res) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('convert end!!!');
});
