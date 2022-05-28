var path = require('path'); 
var express = require('express'); 
var exphbs = require('express-handlebars'); 
var fortunes = require('./fortunes.json'); 

var app = express(); 
var port = process.env.PORT || 3000; 

app.use(express.static('public')); 

app.engine('.handlebars', exphbs.engine({
    defaultLayout: 'main'
}));

app.set('view engine', '.handlebars');


app.get('/', function(req, res){

  
})