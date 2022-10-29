const nodemailer = require('nodemailer');

const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.js')[env];

const smtpTransport = require('nodemailer-smtp-transport');
const handlebars = require('handlebars');
const { promisify } = require('util');
const fs = require('fs');


const readFile = promisify(fs.readFile);


const HtmlToSend = async({name = "sir/mam"})=>{
	try{
    let html = await readFile('/path/to/file', 'utf8');
    let template = handlebars.compile(html);
    let data = {
        username: name
    };
    let htmlToSend = template(data);
   	return htmlToSend

	}catch(error){return error}
}

// const sendMail = async () => {
//     let html = await readFile('/path/to/file', 'utf8');
//     let template = handlebars.compile(html);
//     let data = {
//         username: "Toto"
//     };
//     let htmlToSend = template(data);
    
//     let mailOptions = {
//         from: 'from@toto.com',
//         to : 'to@toto.com',
//         subject : 'test',
//         html : htmlToSend
//     };
//     smtpTransport.sendMail(mailOptions, (error, info) => {
//         if (error) console.log(error);
//     });
// });


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
			from: config.EMAIL_USERNAME,
			to: `taviefalcon@gmail.com, ${email}`, 
			subject: 'Tavie Portfolio inquiry',
			text: `From tamina thank you for subscibing ${message}`
		};
		return mailOptions
	};

// }

// "Thank you for your inquiry. I will get back on you the soonest possible."

// "Tavie"


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

module.exports = {mailOptions , transport , htmlToSend};