'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FavourItems', {
      quantity: {
        type: Sequelize.INTEGER,
      },
      favourId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        primaryKey: true,
        references:{
          model: 'Favours',
          key: 'id',
        }
      },
      itemId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'Items',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('FavourItems');
  }
};