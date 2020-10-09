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
      
      // Super M:N relationship with Reward
      Favour.belongsToMany(models.Reward, {
        through: models.FavourReward, 
        foreignKey: 'favourId'
      });
      Favour.hasMany(models.FavourReward, {
        foreignKey: 'favourId'
      });
    }
  };
  Favour.init({

    offererId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    receiverId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    proof: DataTypes.BLOB,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Favour',
  });
  return Favour;
};