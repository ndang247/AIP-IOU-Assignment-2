'use strict';
const {
  Model, DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Super M:N relationship with Favour
      Reward.belongsToMany(models.Favour, {
        through: models.FavourReward, 
        foreignKey: 'rewardId'
      });
      Reward.hasMany(models.FavourReward, {
        foreignKey: 'rewardId'
      });
      
      // Super M:N relationship with Request
      Reward.belongsToMany(models.Request, {
        through: models.RequestReward, 
        foreignKey: 'rewardId'
      });
      Reward.hasMany(models.RequestReward, {
        foreignKey: 'rewardId'
      });
    }
  };
  Reward.init({
    rewardName: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Reward',
  });
  return Reward;
};