var express = require('express');

var app = express.createServer(express.logger());
app.use(express.static(__dirname + "./")); // necessary for local .css files

var fs = require('fs');

app.get('/', function(request, response) {
  var message = fs.readFileSync('index.html')
    response.send(message.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

