'use strict';
const {
  Model, DataTypes
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class RequestReward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RequestReward.belongsTo(models.Reward, {
        onDelete: 'CASCADE',
        foreignKey: 'rewardId'
      });
      RequestReward.belongsTo(models.Request, {
        onDelete: 'CASCADE',
        foreignKey: 'requestId'
      });
    }
  };
  RequestReward.init({
    requestId: DataTypes.INTEGER,
    rewardId: DataTypes.INTEGER,
    requesterId: DataTypes.INTEGER,
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'RequestReward',
  });
  return RequestReward;
};