var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
  var message = fs.readFileSync('index.html')
  var stuff = buffer.toString('utf8', 0, message);
  response.send(stuff);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
