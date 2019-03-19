const express = require('express');
const routerAdminDelete = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'collegem',
	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

routerAdminDelete.get('/delete_for_admin', function(req,res,next){
    res.render('delete_course_admin',{
        title:"Delete Course"
    });
});

routerAdminDelete.post('/delete_course_admin', function(req,res,next){
	const ID = req.body.ID;
	const Course_No = req.body.Course_No;

	connection.query("CALL DeleteClass(?,?);", [ID,Course_No], (error, results, fields)=>{
		if(error) throw error;

		res.redirect('/admin_home')
	});
});

module.exports = routerAdminDelete;