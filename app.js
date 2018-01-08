const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes')
//connecting to mongodb
mongoose.connect('mongodb://localhost/blog-api',{
  useMongoClient: true
}, function(){
  console.log('connected to mongodb');
});

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api',routes);

const home = "A restful api for blog application";
//home route ( http://localhost:3000/api/ )
routes.get('/',function(req,res){
  res.send(home);
});

//server listening on port 3000
app.listen(3000,function(){
  console.log('server listening on port 3000');
});

module.exports = app;
