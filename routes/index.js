var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

var emailConfig=require('../config/email');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rob' });
});

router.get("/send-email", function(req, res) {
	//.query is for gets, .body is for posts
	// res.send(req.query.email);
	var transporter = nodemailer.createTransport(emailConfig);
	var message = {
		from: req.query.email,
		to: emailConfig.auth.myEmail,
		subject: req.query.subject,
		text: req.query.message,
		html: "<p> From: "+" "+req.query.name+"</p> <p> Message: "+" "+req.query.message+"</p>"
	};
	transporter.sendMail(message, function(error, info) {
		if(error) {
			console.log(error)
			res.send("email error");
		}
		else {
			console.log(info);
			res.send("Email sent!")
		}
	});
});

module.exports = router;
