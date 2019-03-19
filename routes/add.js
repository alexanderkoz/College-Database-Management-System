const express = require('express');
const routerAdd = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'collegem',
	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

routerAdd.get('/add', function(req, res, next) {
	res.render('add', {
		title: 'Add class'
	});
});

routerAdd.post('/add', function(req, res, next) {

	const ID = req.body.ID;
	const Academic_year = req.body.Academic_year;
	const Section_ID = req.body.Section_ID;
	const Student_ID = req.body.Student_ID;


connection.query("CALL AddClassStudent(?,?,?,?);", [ID,Academic_year,Section_ID, Student_ID], (error, results, fields) => {
	if (error) throw error;
	res.redirect('/student_panel')
    });
});

module.exports = routerAdd;