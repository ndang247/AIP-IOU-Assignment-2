const { Sequelize, DataTypes, Model } = require('sequelize');
import {sequelize} from '../database/connection.js';

const FavourItem = sequelize.define('FavourItem', {
  // Model attributes are defined here
  favourId: {
    type: DataTypes.INTEGER,
    references: {
      model: Favour,
      key: 'id'
    }
  },
  itemId: {
    type: DataTypes.INTEGER,
    references: {
      model: Item, 
      key: 'id'
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  freezeTableName: true
});

modules.export = FavourItem