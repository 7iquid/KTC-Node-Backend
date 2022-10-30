const nodemailer = require('nodemailer');

const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.js')[env];


const handlebars = require('handlebars');
const { promisify } = require('util');
const fs = require('fs');


const readFile = promisify(fs.readFile);


const HtmlToSend = async({name,email, message})=>{
	try{
    let html = await readFile('Controller/emailTemplate/response.html', 'utf8');
    let template = handlebars.compile(html);
    let data = {
        username: name+"," ||email+"," ,
        message : message
    };
    let htmlToSend = template(data);
   	return htmlToSend

	}catch(error){return error}
}


const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.EMAIL_USERNAME,
    pass: config.EMAIL_PASSWORD
  }
});


const mailOptions = ({email, name, message},html) => {
		const mailOptions = {
			from: config.EMAIL_USERNAME,
			to: `taviefalcon@gmail.com, ${email}`, 
			subject: 'Tavie Portfolio inquiry',
			text: `From tamina thank you for subscibing ${message}`,
			html: html
		};
		return mailOptions
	};

module.exports = {mailOptions , transport , HtmlToSend};