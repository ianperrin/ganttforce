var express = require('express');
var stormpath = require('express-stormpath');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(stormpath.init(app, { }));

app.get('/', function (req, res) {
  console.log('Example app getting root path!');
  res.send('Hello World!');
});

app.on('stormpath.ready', function () {
  app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port ' + process.env.PORT || 3000);
  });
});
