var express = require('express');
var stormpath = require('express-stormpath');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(stormpath.init(app, { }));

// index page 
app.get('/', function(req, res) {
  console.log('Ganttforce app getting root path!');
  res.render('pages/index');
});

app.on('stormpath.ready', function () {
  app.listen(app.get('port'), function () {
    console.log('Ganttforce app listening on port ' + app.get('port'));
  });
});
