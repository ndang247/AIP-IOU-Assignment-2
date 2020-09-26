'use strict';
const {
  Model, DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favour.belongsTo(models.User, {
        onDelete: 'CASCADE',
        foreignKey: 'receiverId'
      });
      Favour.belongsTo(models.User, {
        onDelete: 'CASCADE',
        foreignKey: 'receiverId'
      });
      
      // Super M:N relationship with Item
      Favour.belongsToMany(models.Item, {
        through: models.FavourItem, 
        foreignKey: 'favourId'
      });
      Favour.hasMany(models.FavourItem, {
        foreignKey: 'favourId'
      });
    }
  };
  Favour.init({
    proof: DataTypes.BLOB,
    offererId: DataTypes.INTEGER,
    receiverId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Favour',
  });
  return Favour;
};