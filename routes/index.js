const express = require('express');
var auth = require('../config/mailcreds');
var mailer = require('nodemailer');
const router = express.Router();

const sql = require('../utils/sql');

const transporter = mailer.createTransport({
	service: 'gmail',
	auth: {
		user: auth.user,
		pass: auth.pass
	}
});



router.get('/', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');
    
        let query = "SELECT * FROM portfolio_page";


        sql.query(query, (err, rows) => {
          
    
          if (err) {
            return console.log(err.message);
          }
          console.log(rows);
          
          res.render('home', {data: rows});
        
        });
      
});

router.post('/mail', (req, res) => {
	console.log('hit mail route');
	console.log('body: ', req.body);

	const mailOptions = {
		from: req.body.usermail,
		to: auth.user,
		replyTo: req.body.usermail,
		subject: `From portfolio site: Subject = ${req.body.subject || 'none'}`, // Subject line
		text: req.body.message
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log("failed... ", err);
			res.json(err);
		} else {
			console.log("success! ", info);
			res.json(info);
		}
	});
});



router.get('/things/:id', (req, res) => {
	// console.log('hit a dynamic route!');
	 console.log(req.params.id);

	 let query = `SELECT * FROM portfolio_page WHERE id="${req.params.id}"`;

	 sql.query(query, (err, result) => {
			 if (err) { throw err; console.log(err); }

			 console.log(result); 

			 
			 res.json(result);
	 });
});

module.exports = router;