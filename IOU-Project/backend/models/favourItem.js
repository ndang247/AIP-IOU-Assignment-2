'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class FavourItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FavourItem.belongsTo(models.Item, {
        onDelete: 'CASCADE',
        foreignKey: 'itemId'
      });
      FavourItem.belongsTo(models.Favour, {
        onDelete: 'CASCADE',
        foreignKey: 'favourId'
      });

    }
  };
  FavourItem.init({
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'FavourItem',
  });
  return FavourItem;
};