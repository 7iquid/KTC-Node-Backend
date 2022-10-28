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