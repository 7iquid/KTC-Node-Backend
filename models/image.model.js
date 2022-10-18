'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {

    static associate(models) {
    }      
  }
  Image.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
    image: { 
        type: DataTypes.BLOB('long'), // <- type for image ( database :postgresql )
        allowNull: true
      } 
  },{
    sequelize,
    modelName: 'Image',
  });
  return Image;
};