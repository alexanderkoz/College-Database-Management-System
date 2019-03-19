const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'collegem',
	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});


const query_student_schedule = "SELECT co.Course_Code,co.Course_No, c.Room, c.Day, c.Start_Time, c.Finish_Time FROM student st JOIN enrollment e ON e.Student_ID = st.ID JOIN section s ON e.Section_ID = s.ID JOIN class_schedule c ON s.Schedule_ID = c.ID JOIN course co ON s.Course_ID=co.ID WHERE st.ID = 5011 AND st.Last_Name = 'Tarbor' AND e.Academic_year = '2018';";

router.get('/', function(req, res) {

	connection.query(query_student_schedule, (error, results, fields) => {

		if (error) {
			throw error;
		}

		console.log(results);
		res.render('student_schedule', {
				results
			});
	});
});

module.exports = router;
