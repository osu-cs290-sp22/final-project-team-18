var fs = require('fs')
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var fortunes = require('./fortunes.json');
var fs = require('fs')

var app = express();
var port = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(express.static('public'));
app.use(express.json())

app.engine('.handlebars', exphbs.engine({
    defaultLayout: 'main'
}));

app.set('view engine', '.handlebars');

app.get('/', function(req, res){
    res.status(200).render('findFortune')
})

app.get('/:name/:id', function(req, res){
    var name = req.params.name
    var id = req.params.id
    var fortune_text = fortunes.forts[id].text;
    res.status(200).render('finalFortune',{
        name: name,
        text: fortune_text
    });
    console.log("===id: ",id)
})

app.post('/addFortune', function (req, res) {
      console.log("  - req.body:", req.body)
      if (req.body && req.body.id && req.body.text) {
        fortunes[req.body.id].push({
          text: req.body.text,
          id: req.body.id
        })
        console.log("  - fortunes[" + req.body.id + "]:", fortunes[req.body.id])
        fs.writeFile(
          "./fortunes.json",
          JSON.stringify(fortunes, null, 2),
          function (err) {
            if (!err) {
              res.status(200).send("Success!!!")
            } else {
              res.status(500).send("Error: error saving photo card")
            }
          }
        )
      } else {
        res.status(400).send("Error: request body needs a 'url' and 'caption'")
      }
})



app.post('/addFortune', function (req, res) {
    console.log("  - req.body:", req.body)
    if (req.body && req.body.id && req.body.text) {
      fortunes.forts.push({
        text: req.body.text,
        id: req.body.id
      })
      console.log("  - fortunes[" + req.body.id + "]:", [req.body.text])
      fs.writeFile(
        "./fortunes.json",
        JSON.stringify(fortunes, null, 2),
        function (err) {
          if (!err) {
            res.status(200).send("Success!!!")
          } else {
            res.status(500).send("Error: error saving photo card")
          }
        }
      )
    } else {
      res.status(400).send("Error: request body needs a 'url' and 'caption'")
    }
})



app.listen(port, function(){
    console.log("== Server is listening on port", port);
})
