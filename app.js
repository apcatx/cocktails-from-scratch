const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const Cocktail = require('./models/Cocktail.js');
// const photo = require('./public/photos');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/classicCocktailsdb').then(function() {
  console.log('connected to classicCocktailsdb')
});
const app = express();
app.engine("mustache", mustacheExpress());
app.set("views", __dirname + "/views");
app.set("view engine", "mustache");

app.use(express.static('public'));
app.use(express.static('views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', function(req, res) {
  MongoClient.connect('mongodb://localhost:27017/classicCocktailsdb', function(err, db) {
    if (err) {
      console.log('no data', err);
    } else {
      const collection = db.collection('classics');
      collection.find({}).toArray(function(err, docs) {
        res.render('index', {
          classics: docs
        });
      });
      db.close()
    }
  })
});

app.listen(3000, function() {
  console.log('Cocktails started on port 3000...');
});
