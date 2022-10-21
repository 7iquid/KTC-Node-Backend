const models = require( '../models');

const { Authors } = models;

const authorControl = {
  async create({ body,params }, res, next) {
    try {
      const { author } = body;
      if (!author) {
        return res.status(404).send({ error: 'author not found' });
      }
      const DBres = await Authors.create({ author });
      return res.status(201).send(DBres);
    } catch (e) {
      return next(new Error(e));
    }
  },

  async fetchAll({ body,params }, res, next) {
    try {
      const myAuthors = await Authors.findAll();
      return res.status(200).send(myAuthors);
    } catch (e) {
      return next(new Error(e));
    }
  },

  async fetchOne({ params }, res, next) {
    try {
      const myauthor = await Authors.findOne({ where: { id: params.authorId } })

      if (!myauthor) {
        return res.status(404).send({ error: 'author not found' });
      }
      return res.status(200).send(myauthor);
    } catch (e) {
      return next(new Error(e));
    }
  },

  async update({ body,  params }, res, next) {
    try {
      const myauthor = await Authors.findOne({ where: { id: params.authorId } });
      if (!myauthor || !body.author) {
        return res.status(400).send({ error: 'Wrong author id', author:"undifined" });
      }
      const updatedTodo = await Authors.update({ author: body.author }, { where: { id: params.authorId }  });;
      return res.status(200).send(updatedTodo);
    } catch (e) {
      return next(new Error(e));
    }
  },

  async delete({ params, decoded }, res, next) {
    try {
      const myauthor = await Authors.findOne({ where: { id: params.authorId} });
      if (!myauthor) {
        return res.status(400).send({ error: 'Wrong author id' });
      }
      await myauthor.destroy();
      return res.status(200).send({});
    } catch (e) {
      return next(new Error(e));
    }
  }
};

module.exports= authorControl;
