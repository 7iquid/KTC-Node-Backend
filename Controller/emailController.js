
const {mailOptions , transport, HtmlToSend} = require('./emailTemplate/mailerKo')


const emailControl = {
  async create({ body}, res, next) {
    if (body.email || body.message){res.sendStatus(400).end({email:undefined,message:undefined})}

    try{
      // data checkert
      // const {email, name, message, } = body
      // console.log(HtmlToSend(body))
      transport.sendMail(mailOptions(body, await HtmlToSend(body)), function(error, info){
          if (error) {

            return res.status(400).send({error: error})
          } else {

            return res.status(201).send({info: info.response});
          }
      }); 


      // console.log(mailOptions(email) )
      

    }catch(e){
      return next(new Error(e));
    }

  },

  // async fetchAll({ body,params }, res, next) {
  // },

  // async fetchOne({ params }, res, next) {
  // },

  // async update({ body,  params }, res, next) {
  // },

  // async delete({ params, decoded }, res, next) {

  // }
};

module.exports= emailControl;