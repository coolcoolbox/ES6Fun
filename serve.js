
var http = require('http')
  , path = require('path');

exports.start = function() {
    var http = require("http"),
        url  = require("url"),
        path = require("path"),
        fs   = require("fs");

    var server = http.createServer(function (req, res) {
      
        res.setHeader('Access-Control-Allow-Origin', '*');
        var pathname = __dirname + url.parse(req.url).pathname;
        if(path.extname(pathname) == "") {
            pathname += "/";
        }
        if(pathname.charAt(pathname.length - 1) == "/") {
            pathname += "index.html";
        }

        fs.exists(pathname, function(exists) {
            if(exists) {
                var type = {
                    ".html": "text/html",
                    ".htm": "text/html",
                    ".js": "text/javascript",
                    ".css": "text/css",
                    ".ico": "image/x-icon",
                    ".jpeg": "image/jpeg",
                    ".jpg": "image/jpeg",
                    ".png": "image/png",
                    ".gif": "image/gif",
                    ".xml": "text/xml",
                    ".json": "application/json",
                    ".txt": "text/plain",
                    ".pdf": "application/pdf",
                    ".swf": "application/x-shockwave-flash"
                };
                res.writeHead(200, {"Content-Type": type[path.extname(pathname)]});
                fs.readFile(pathname, function(err, data) {
                    res.end(data);
                });
            } else {
                res.writeHead(404, {"Content-Type": "text/html"});
                res.end("<h1>404 Not Found</h1>");
            }
        });
    }).listen(8088);

    console.log("Server is running at http://127.0.0.1:8088/");
    return server;
}
exports.start();