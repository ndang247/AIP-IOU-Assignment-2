'use strict';
const {
  Model, DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Request.belongsTo(models.User, {
        onDelete: 'CASCADE',
        foreignKey: 'requesterId'
      });
      Request.belongsTo(models.User, {
        onDelete: 'CASCADE',
        foreignKey: 'accepterId'
      });
      
      // Super M:N relationship with Item
      Request.belongsToMany(models.Item, {
        through: models.RequestItem, 
        foreignKey: 'requestId'
      });
      Request.hasMany(models.RequestItem, {
        foreignKey: 'requestId'
      });
    }
  };
  Request.init({
    proof: DataTypes.BLOB,
    requesterId: DataTypes.INTEGER,
    accepterId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};