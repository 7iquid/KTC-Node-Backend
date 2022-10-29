const nodemailer = require('nodemailer');

const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.js')[env];

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.EMAIL_USERNAME,
    pass: config.EMAIL_PASSWORD
  }
});

// const EmailConnect ={

const mailOptions = ({email, name, message}) => {
		const mailOptions = {
			from: 'aasd@gmail.com',
			to: `taviefalcon@gmail.com, ${email}`, 
			subject: 'Tavie Portfolio inquiry',
			text: `From tamina thank you for subscibing ${message}`
		};
		return mailOptions
	};

// }




// transport.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// }); 

// const {mailerKo} = require('./ema')
// let transport = nodemailer.createTransport({
//    host: "smtp.gmail.com",
//    port: 465,
//    secure: true,
//    auth: {
//      user: EMAIL_USERNAME,
//      pass: EMAIL_PASSWORD
//    }
// });

// var transport = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'tavlegktc@gmail.com',
//     pass: 'gsqdjhdwyoelcwkx'
//   }
// });


// var mailOptions = {
//   from: 'aasd@gmail.com',
//   to: 'taviefalcon@gmail.com', 
//   subject: 'Tavie Portfolio inquiry',
//   text: 'From tamina thank you for subscibing'
// };


// transport.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// }); 

module.exports = {mailOptions , transport};