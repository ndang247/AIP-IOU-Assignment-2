const {DataTypes} = require('sequelize');
import {sequelize} from '../database/connection.js';

const RequestItem = sequelize.define('RequestItem', {
  // Model attributes are defined here
  requestId: {
    type: DataTypes.INTEGER,
    references: {
      model: Request,
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
  quantity:{
    type: DataTypes.INTEGER,
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  freezeTableName: true
});

module.exports = RequestItem