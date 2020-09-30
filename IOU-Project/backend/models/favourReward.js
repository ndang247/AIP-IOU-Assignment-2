'use strict';
const {
  Model, DataTypes
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class FavourReward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FavourReward.belongsTo(models.Reward, {
        onDelete: 'CASCADE',
        foreignKey: 'rewardId'
      });
      FavourReward.belongsTo(models.Favour, {
        onDelete: 'CASCADE',
        foreignKey: 'favourId'
      });
    }
  };
  FavourReward.init({
    favourId: DataTypes.INTEGER,
    rewardId: DataTypes.INTEGER,
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'FavourReward',
  });
  return FavourReward;
};