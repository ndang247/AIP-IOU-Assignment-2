'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rewards', [
    {
        rewardName: "Pizza",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        rewardName: "Sushi",
        createdAt: new Date(),
        updatedAt: new Date()
    }, 
    {
        rewardName: "Pho",
        createdAt: new Date(),
        updatedAt: new Date()
    }, 
    {
        rewardName: "Noodle",
        createdAt: new Date(),
        updatedAt: new Date()
    }, 
    {
        rewardName: "Coffee",
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
    return queryInterface.bulkDelete('Rewards', null, {});
  }
};