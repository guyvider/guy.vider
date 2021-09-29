var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('Hello World!');
}).listen(8080);

const mysql = require("mysql");
const dbConfig = require("./db.config.js");
// Create a connection to the database
const connection = mysql.createConnection({
host: dbConfig.HOST,
user: dbConfig.USER,
password: dbConfig.PASSWORD,
database: dbConfig.DB
});
// open the MySQL connection
connection.connect(error => {
if (error) throw error;
console.log("Successfully connected to the database.");
});
module.exports = connection;

// Create a route for getting all customers
app.get("./Guy_vider_app\routes", function(req, res){
    sql.query("SELECT * FROM customers", (err, mysqlres) => {
    if (err) {
    console.log("error: ", err);
    res.status(400).send({message: "error in getting all customers: " + err});
    return;
    }
    console.log("got all customers...");
    res.send(mysqlres);
    return;
    });
    });
