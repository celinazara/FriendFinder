
//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

//data parsing
app.use(bodyParser.json());
ap.use(bodyParser.urlencode({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//Routes
require('./routing/appiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);

//Server begins to listen
app.listen(PORT, function() {
  console.log('listening on PORT:' + PORT);
});
