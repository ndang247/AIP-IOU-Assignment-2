'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [
    {
        itemName: "Pizza",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        itemName: "Sushi",
        createdAt: new Date(),
        updatedAt: new Date()
    }, 
    {
        itemName: "Pho",
        createdAt: new Date(),
        updatedAt: new Date()
    }, 
    {
        itemName: "Noodle",
        createdAt: new Date(),
        updatedAt: new Date()
    }, 
    {
        itemName: "Coffee",
        createdAt: new Date(),
        updatedAt: new Date()
    },  
    ], {});
  },


  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};