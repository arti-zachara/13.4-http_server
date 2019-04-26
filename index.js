var http = require("http");
var fs = require("fs");

var server = http.createServer();

server.on("request", function(request, response) {
  if (request.method === "GET" && request.url === "/") {
    fs.readFile("./index.html", "utf-8", function(err, data) {
      // read index.html file and respond with positive outcome
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      // if ok, then prepare a header
      if (!err) response.write(data);
      // err handling
      response.end();
    });
  } else {
    fs.readFile("./404.png", function(err, data) {
      response.statusCode = 404;
      if (!err) response.write(data);
      // err handling
      response.end();
    });
  }
});

server.listen(8080);
// listens for events
