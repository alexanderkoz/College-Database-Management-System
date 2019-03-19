const express = require('express');
const routerDelete = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'collegem',
	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

routerDelete.get('/delete', function(req, res, next) {
	res.render('delete', {
		title: 'Delete Class'
	});
});

routerDelete.post('/delete', function(req, res, next) {

	const Course_ID = req.body.Course_ID;
	const Student_ID = req.body.Student_ID;
  const Academic_year = req.body.Academic_year;
	connection.query("CALL DeleteClassStudent(?,?,?);",[Student_ID,Course_ID,Academic_year], (error,results,fields) =>{
		if (error) throw error;
		res.redirect('/student_panel')
	});
});

module.exports = routerDelete;