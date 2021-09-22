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