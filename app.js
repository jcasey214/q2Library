var express = require('express');
var cowsay = require('cowsay');
var fortune = require('fortune-cookie');

var app = express();

var books = ["Javascript-The Good Parts", "Eloquent Javascript",
"Horton Hears a Who"];

app.get('/cowsay', function(request, response){
  response.setHeader('content-type','text/html');
  response.send(
    "<pre>" +
      cowsay.say({'text': fortune[Math.floor(Math.random() * 250)]}) +
    "</pre>"
  );
});

app.get('/', function(request, response){
  response.json(books);
});

app.listen(8080);
