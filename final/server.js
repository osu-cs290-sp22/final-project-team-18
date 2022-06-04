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

app.post('')

app.get('/', function(req, res){
    
    res.status(200).render('findFortune')
})

app.get('/:name/:id', function(req, res){
    var name = req.params.name
    var id = req.params.id
    
    var fortune_text = fortunes[id].text;

    res.status(200).render('finalFortune',{
        name: name,
        text: fortune_text
    });
    console.log("===id: ",id)
})



app.listen(port, function(){
    console.log("== Server is listening on port", port);
})
