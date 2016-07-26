var fs = require('fs');
var path = require ('path');
module.exports = function(dirname, ext, callback) {
var list = [];
    fs.readdir(process.argv[2], function(err, list) {
        if (err) {
            return callback(err);
        } else {list.forEach(function(file) {
            if (path.extname(file) === '.' + process.argv[3]) {
                list.push(fileName);
            }
            return callback(null, list);
        });
      }
    });
};
