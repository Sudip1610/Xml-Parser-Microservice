var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/app');
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  const port = 3000;
  app.listen(port, () => console.log(` listening at port:${port}`));