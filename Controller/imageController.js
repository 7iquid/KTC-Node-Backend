const models = require( '../models');
const path = require('path');
const { Imagefiles, Authors } = models;


const imageControl = {
  async create(req, res, next) {
      const filesfile = req.files.file
      const {author} = req.body
      const url = req.headers.host + '/';
      const id = await Authors.findOne({where:{author:author}})
      const saveDIR=`${url}uploads/media/${filesfile.name}`
      const uploadTo = `uploads/media/${filesfile.name}`;
     
      const DataStructure={
        "filename": filesfile.name ,
        "filelocation": saveDIR,
        "authorId": id.id
      }

      const image = await Imagefiles.create(DataStructure);

      req.files.file.mv(uploadTo, (err) => {
      if(err){ return res.status(500).send(err)}; });
      
      res.status(201).send({image});
      
  },

  async fetchAll(req, res, next) {
    try {
      const myimagefiles = await Imagefiles.findAll();
      return res.status(200).send(myimagefiles);
    } catch (e) {
      return next(new Error(e));
    }
  },

  async fetchOne({ params }, res, next) {
    try {
      const myImage = await Imagefiles.findOne({
        where: { id: params.imageId },
      });
      if (!myImage) {
        return res.status(404).send({ error: 'Image not found' });
      }
      return res.status(200).send(myImage);
    } catch (e) {
      return next(new Error(e));
    }
  },

  

  async delete({ params }, res, next) {
    try {
      const image = await Imagefiles.findOne({ where: { id: params.imageId} });
      if (!image) {
        return res.status(400).send({ error: 'Wrong todo id' });
      }
      await image.destroy();
      return res.status(200).send({});
    } catch (e) {
      return next(new Error(e));
    }
  }
};

module.exports= imageControl;
