const { Sequelize, DataTypes, Model } = require('sequelize');
import {sequelize} from '../database/connection.js';

const Favour = sequelize.define('Favour', {
  // Model attributes are defined here
    id:{
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    isPaid:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
    // fk are in relationships.js
  }, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  freezeTableName: true
});

module.exports = Favour