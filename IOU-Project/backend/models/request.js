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
        foreignKey: 'accepterId'
      });
      
      // Super M:N relationship with Reward
      Request.belongsToMany(models.Reward, {
        through: models.RequestReward, 
        foreignKey: 'requestId'
      });
      Request.hasMany(models.RequestReward, {
        foreignKey: 'requestId'
      });
    }
  };
  Request.init({
    taskName: DataTypes.STRING,
    description: DataTypes.STRING,
    proof: DataTypes.BLOB,
    accepterId: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};