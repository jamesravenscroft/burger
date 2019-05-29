var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",

  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
console.log(connection);
// Export connection for our ORM to use.
module.exports = connection;



// var mysql = require("mysql");
// connection = mysql.createConnection({
// 	port: 3306,
// 	host: 'localhost',
// 	user: 'root',

// 	database: 'burgers_db'
// });

// if (process.env.JAWSDB_URL) {
// 		// DB is JawsDB on Heroku
// 		connection = mysql.createConnection(process.env.JAWSDB_URL);
// 	} else {
// 		// DB is local on localhost
// 		// connection = mysql.createConnection({
// 		// 	port: 3309,
// 		// 	host: 'localhost',
// 		// 	user: 'root',
// 		// 	database: 'burgers_db'
// 		// });
// 	};
// 	var connection;
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// }
// );

module.exports = connection;

//old code
// // Pull in required dependencies
// var mysql = require('mysql');

// // Create the MySQL connection object
// var connection;



// // Make the connection to MySQL
// connection.connect(function(err) {
//   if (err) {
//     console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
//     return;
//   }
//   console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
// });

// // Export connection for ORM use
// module.exports = connection
