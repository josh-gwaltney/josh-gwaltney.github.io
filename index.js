var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

var bodyParser = require('body-parser');
var compression = require('compression');
var logger = require('morgan');

var port = process.env.PORT || 2501;
var env = process.env.NODE_ENV;

console.log('Starting application');
console.log('PORT=' + port);
console.log('NODE_ENV=' + env);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

switch (env) {
  case 'prod':
    console.log('** RUNNING PRODUCTION ENVIRONMENT **');
    console.log('serving from ' + './dist/');
    app.use('/', express.static('./dist/'));
    break;
  case 'dev':
    console.log('** RUNNING DEV ENVIRONMENT **');
    console.log('serving from ' + './dist/');
    app.use('/', express.static('./dist/'));
    break;
  default:
    console.log('** RUNNING LOCAL ENVIRONMENT **');
    console.log('serving from ' + './dist/');
    break;
}

app.get('/*', function (req, res) {
  res.sendFile(__dirname + 'dist/index.html');
});

http.listen(port, function () {
  console.log('Server started on port ' + port);
  console.log('env: ' + app.get('env'));
  console.log('root directory: ' + __dirname);
  console.log('process.cwd:' + process.cwd());
});
