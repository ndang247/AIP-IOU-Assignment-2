'use strict';
const {
  Model, DataTypes
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.User, {
        through: models.Favour, 
        foreignKey: 'offererId',
        as: 'offerer'
      });
      User.belongsToMany(models.User, {
        through: models.Favour, 
        foreignKey: 'receiverId',
        as: 'receiver'
      });
      User.hasMany(models.Favour, {
        foreignKey: {
          name: 'offererId'
        }
      });
      User.hasMany(models.Favour, {
        foreignKey: {
          name: 'receiverId'
        }
      });
      //
      User.hasMany(models.Request, {
        foreignKey: {
          name: 'accepterId'
        }
      });
      // 
      User.hasMany(models.RequestReward, {
        foreignKey: {
          name: 'requesterId'
        }
      });

    }
  };
  User.init({
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};