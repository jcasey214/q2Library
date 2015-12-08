var express = require('express');
var cowsay = require('cowsay');

var app = express();

var books = ["Javascript-The Good Parts", "Eloquent Javascript",
"Horton Hears a Who"];

app.get('/cowsay/:cowsays', function(request, response){
  response.send(cowsay.say({'text': request.params.cowsays}));
})

app.get('/', function(request, response){
  response.json(books);
});

app.listen(8080);
