
const EMAIL_USERNAME = "tavlegktc@gmail.com"
const EMAIL_PASSWORD = "Liquid1985"



const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 465,
   secure: true,
   auth: {
     user: EMAIL_USERNAME,
     pass: EMAIL_PASSWORD
   }
});

const emailControl = {
  async create({ body,params }, res, next) {
    try{
      return res.status(201).send({body});
    }catch(e){
      return next(new Error(e));
    }

  },

  async fetchAll({ body,params }, res, next) {
  },

  async fetchOne({ params }, res, next) {
  },

  async update({ body,  params }, res, next) {
  },

  async delete({ params, decoded }, res, next) {

  }
};

module.exports= emailControl;