'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imagefiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Imagefiles.belongsTo(models.Authors,{
        as:'author',
        foreignKey: 'authorId',
      });
    }
  }
  Imagefiles.init({

    filename: DataTypes.STRING,
    filelocation: DataTypes.STRING,
    authorId:  DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Imagefiles',
  });
  return Imagefiles;
};