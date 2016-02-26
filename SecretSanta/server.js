var debug = require('debug')('santagame');

var http = require('http');
var fs = require('fs');

var nameList = [
	'gio',
	'anna',
	'chiara',
	'ella',
	'sarah',
	'sara'
];

debug("hello World. Listening on port 9966");

http.createServer(function (req, res) {
    var contents;
    debug('someone is requesting %s', req.url);
    if (req.url === "/list") {
        debug('we send the list');
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(nameList));
    } else if (req.url === "/") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var stream = fs.createReadStream("./index.html");
        stream.pipe(res);
        debug("just sent the html file!");
    } else if (req.url === "/script.js") {
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        contents = fs.readFileSync("./script.js", "UTF-8");
        res.end(contents);
        debug("just sent the js file!");
    } else {
        debug('file not found!');
        res.writeHead(404);
        res.end("oops!");
    }

}).listen(9966);
