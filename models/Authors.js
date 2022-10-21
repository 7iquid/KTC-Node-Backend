'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Authors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Authors.hasMany(models.imagefiles,{
      //   as:'imagefiles',
      //   foreignKey: 'AuthorsId',
      // });
    }
  }
  Authors.init({

    author: {
      unique: true,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Authors',
  });
  return Authors;
};