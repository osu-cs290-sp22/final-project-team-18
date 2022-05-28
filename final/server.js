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

app.get('/fortune', function(req, res){
    res.status(200).render('findFortune')
})

app.listen(port, function(){
    console.log("== Server is listening on port", port); 
})