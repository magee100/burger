var  mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if  (err) {
        console.erre("error connecting:" + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;