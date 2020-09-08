const { Sequelize, DataTypes, Model } = require('sequelize');
import {sequelize} from '../database/connection.js';

const Request = sequelize.define('Request', 
{
    // Model attributes are defined here
    id:{
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    task: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    // fk are in relationship.js
    
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    freezeTableName: true
});

module.exports = Request