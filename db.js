var mysql = require('mysql')
var connection = mysql.createConnection({
	host: 'localhost',
	port: '3000',
	user: 'root',
	password: 'root',
	database: 'collegem',
	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});


connection.connect();

global.connection = connection;

console.log("Database is connected");
module.exports = connection;
