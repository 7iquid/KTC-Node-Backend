'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imagefiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      imagefiles.belongsTo(models.blogs);
      models.blogs.hasMany(imagefiles);
    }
  }
  imagefiles.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    filename: DataTypes.STRING,
    filelocation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'imagefile',
  });
  return imagefiles;
};