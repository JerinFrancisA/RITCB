var express = require('express');
var app = express();

app.use('/style', express.static('style'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.get('/index.html', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.get('/help.html', function(req, res) {
  res.sendFile(__dirname + '/help.html');
})

app.get('/admin.html', function(req, res) {
  res.sendFile(__dirname + '/admin.html');
})

app.get('/avail.html', function(req, res) {
  res.sendFile(__dirname + '/avail.html');
})

app.get('/login.html', function(req, res) {
  res.sendFile(__dirname + '/login.html');
})

app.get('/order.html', function(req, res) {
  res.sendFile(__dirname + '/order.html');
})

app.get('/unavail.html', function(req, res) {
  res.sendFile(__dirname + '/unavail.html');
})

app.listen(4000);
