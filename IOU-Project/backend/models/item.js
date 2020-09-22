const { Sequelize, DataTypes, Model } = require('sequelize');
import {sequelize} from '../database/connection.js';

const Item = sequelize.define('Item', 
{
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    item_name: {
        type: DataTypes.STRING
    }
    // fk are in relationship.js
    
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    freezeTableName: true
});

module.exports = Item