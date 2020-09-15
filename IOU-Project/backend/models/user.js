'use strict';
const {
  Model
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
        foreignKey: 'offererId'
      });
      User.belongsToMany(models.User, {
        through: models.Favour, 
        foreignKey: 'receiverId'
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
      User.hasMany(models.Request, {
        foreignKey: {
          name: 'requesterId'
        }
      });
      User.hasMany(models.Request, {
        foreignKey: {
          name: 'accepterId'
        }
      });

    }
  };
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: true
      }
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};