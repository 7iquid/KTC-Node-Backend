const models = require( '../models');
const path = require('path');
const { Imagefiles, Authors } = models;

const imageControl = {
  async create({ body, files }, res, next) {
      const filesfile = files.file
      const {author} = body
      const id = await Authors.findOne({where:{author:author}})
      const uploadTo = `uploads/media/${filesfile.name}`;
     
      const DataStructure={
        "filename": filesfile.name ,
        "filelocation": uploadTo,
        "authorId": id.id
      }
      // new Date().getTime()
      // filesfile.filelocation = uploadTo
      // filesfile.authorId = 4
      // files.file.mv(uploadTo)
      // await files.file.mv(uploadTo, (err) => {
      //     if(err) return res.status(500).send(err);

      //   return 202;
      // });

       // console.log(DataStructure)
      // console.log(typeof(DataStructure),'<<<<<<<<<<<<',typeof(body))
      // console.log(body,'<<<<<<<<<<<<')
      // const { filename } = body;
      // const { userId } = decoded;
      const image = await Imagefiles.create(DataStructure);
      res.status(201).send({testing:123});
  },

  async fetchAll({ decoded }, res, next) {
    try {
      const myimagefiles = await Imagefiles.findAll();
      return res.status(200).send(myimagefiles);
    } catch (e) {
      return next(new Error(e));
    }
  },

  async fetchOne({ params, decoded }, res, next) {
    try {
      const myTodo = await Todo.findOne({
        where: { id: params.todoId, userId: decoded.userId },
        include: [{
          model: TodoItem,
          as: 'todoItems'
        }],
      });
      if (!myTodo) {
        return res.status(404).send({ error: 'Todo not found' });
      }
      return res.status(200).send(myTodo);
    } catch (e) {
      return next(new Error(e));
    }
  },

  async update({ body, decoded, params }, res, next) {
    try {
      const todo = await Todo.findOne({ where: { id: params.todoId, userId: decoded.userId } });
      if (!todo) {
        return res.status(400).send({ error: 'Wrong todo id' });
      }
      const updatedTodo = await Todo.update({ title: body.title || todo.title },
        {
          where: { id: todo.id },
          returning: true,
          plain: true
        },);
      return res.status(200).send(updatedTodo[1]);
    } catch (e) {
      return next(new Error(e));
    }
  },

  async delete({ params, decoded }, res, next) {
    try {
      const todo = await Todo.findOne({ where: { id: params.todoId, userId: decoded.userId } });
      if (!todo) {
        return res.status(400).send({ error: 'Wrong todo id' });
      }
      await todo.destroy();
      return res.status(200).send({});
    } catch (e) {
      return next(new Error(e));
    }
  }
};

module.exports= imageControl;
