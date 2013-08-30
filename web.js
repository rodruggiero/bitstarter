var express = require('express');

var app = express.createServer(express.logger());
app.use(express.static(__dirname + "./")); // necessary for local .css files

var fs = require('fs');

app.get('/', function(request, response) {
  var message = fs.readFileSync('index.html')
    response.send(message.toString());
});

var about_html = 'about.html';

app.get('/about', function(req, res) {
  res.send(fs.readFileSync(about_html).toString());
});

var contact_html = 'contact.html';

app.get('/contact', function(req, res) {
  res.send(fs.readFileSync(contact_html).toString());
});

var soon_html = 'soon.html';

app.get('/soon', function(req, res) {
  res.send(fs.readFileSync(soon_html).toString());
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

