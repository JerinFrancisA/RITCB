var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req,res) {

    res.writeHead(200, {"Content-Type":"text/html"});
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);

});

server.listen(4000, '127.0.0.1');
console.log('listenin to port 4000');
