var express = require('express');
var stormpath = require('express-stormpath');
var app = express();

app.use(stormpath.init(app, { }));

app.get('/', function (req, res) {
  console.log('Example app getting root path!');
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port ' + process.env.PORT || 3000);
});
