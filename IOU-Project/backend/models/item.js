'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Super M:N relationship with Favour
      Item.belongsToMany(models.Favour, {
        through: models.FavourItem, 
        foreignKey: 'itemId'
      });
      Item.hasMany(models.FavourItem, {
        foreignKey: 'itemId'
      });
      
      // Super M:N relationship with Request
      Item.belongsToMany(models.Request, {
        through: models.FavourItem, 
        foreignKey: 'itemId'
      });
      Item.hasMany(models.RequestItem, {
        foreignKey: 'itemId'
      });
    }
  };
  Item.init({
    itemName: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};