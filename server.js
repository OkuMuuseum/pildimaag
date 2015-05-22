// var nomnom = require('nomnom')
// var nomnom = require('nomnom')


var pjson = require('./package.json')

console.log(pjson.name + '.' + pjson.version)

var opts = nomnom.options({
    port: {
        abbr     : 'p',
        metavar  : 'PORT',
        required : true,
        help     : 'Entu API server will listen this port'
    },
    mongodb: {
        abbr     : 'm',
        metavar  : 'STRING',
        required : true,
        help     : 'MongoDB connection string'
    },
}).parse()

console.log(opts)
console.log(opts)
console.log(opts)
console.log(opts)

// var http = require("http");
// var im = require("imagemagick");

// var server = http.createServer(function(req, res) {

//   var options = {
//     width: 120,
//     height: 80,
//     srcPath: "image.png",
//     dstPath: "output.png"
//   };

//   im.resize(options, function(err) {
//     if(err) { throw err; }
//     res.end("Image resize complete");
//   });

// }).listen(8080);


// docker build -t mitselek/pildimaag ~/Documents/github/pildimaag/
// docker run -d -v ~/Documents/github/pildimaag/:/pildimaag/ --name puhh mitselek/pildimaag
// docker logs -f puhh
// docker kill puhh
// docker kill puhh && docker start puhh && docker logs -f puhh