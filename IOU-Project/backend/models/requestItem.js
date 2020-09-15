'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class RequestItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RequestItem.belongsTo(models.Item, {
        onDelete: 'CASCADE',
        foreignKey: 'itemId'
      });
      RequestItem.belongsTo(models.Request, {
        onDelete: 'CASCADE',
        foreignKey: 'requestId'
      });
    }
  };
  RequestItem.init({
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'RequestItem',
  });
  return RequestItem;
};