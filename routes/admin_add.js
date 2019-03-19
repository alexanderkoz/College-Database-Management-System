const express = require('express');
const routerAdminAdd = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'collegem',
	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

routerAdminAdd.get('/admin_add', function(req,res,next){
	res.render('admin_add_class', {
		title:'Add course'
	});
});

routerAdminAdd.post('/course_added', function(req,res,next){

    const ID = req.body.ID;
    const Course_Code = req.body.Course_Code;
    const Course_No = req.body.Course_No;
    const description = req.body.description;
    const Term = req.body.Term;
    const Credits = req.body.Credits;
    
        connection.query("CALL AddClass(?,?,?,?,?,?)", [ID,Course_Code, Course_No, description, Term, Credits], (error, results, fields)=>{
            if (error) throw error;
            res.redirect('/admin_home')
        });
    
    });

    module.exports = routerAdminAdd;