

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imagefile extends Model {

    static associate(models) {
    }      
  }
  imagefile.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    filename: { 
        type: DataTypes.STRING,
        allowNull: false
      },
    filelocation: {
        type: DataTypes.STRING,
        allowNull: false  
     },

  },{
    sequelize,
    modelName: 'imagefile',
  });
  return imagefile;
};