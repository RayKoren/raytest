var modules = require("./module.js");
var fs = require('fs');
var path = require ('path');
var dir = process.argv[2];
var ext = process.argv[3];

modules(dir, ext, function(err, file) {
  if (err) {
   throw err;
  }
  else{
       for(var i = 0; i < files.length; i++){
           console.log(files[i]);
       }
 }
});
