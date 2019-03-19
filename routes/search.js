const express = require('express');
const routerSearch = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'collegem',
	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

routerSearch.get('/search', function(req, res, next) {
	res.render('search', {

	});
});

routerSearch.post('/search_complete', function(req, res, next) {

	const Course_Code = req.body.Course_Code;
	const Course_No = req.body.Course_No;
	const Last_Name = req.body.Last_Name;

	const search_query = "SELECT c.Course_Code,c.Course_No, c.Description, cl.Day, cl.Room, cl.Start_Time, cl.Finish_Time, c.Credits,c.Term, i.First_Name, i.Last_Name FROM class_schedule cl JOIN section s ON s.schedule_id = cl.ID JOIN instructor i ON s.instructor_id = i.ID JOIN course c ON c.ID = s.Course_ID WHERE (c.Course_Code = '"+ Course_Code + "' AND c.Course_No='"+ Course_No + "') OR i.last_name = '"+ Last_Name+"';";
	connection.query(search_query, (error, results, fields) => {

		if (error) {
			throw error;
		}
		res.render('search_result', {

			results

		});
	});
});

routerSearch.get('/search_result', function(req, res, next) {
	res.render('search_result', {

	});
});

module.exports = routerSearch;