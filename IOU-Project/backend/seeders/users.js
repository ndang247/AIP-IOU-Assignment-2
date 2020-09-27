'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        fullname: 'Harry',
        email: 'harry@gmail.com',
        password: 'harry',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: 'Nathan',
        email: 'nathan@gmail.com',
        password: 'nathan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: 'Nam',
        email: 'nam@gmail.com',
        password: 'nam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: 'Hoang',
        email: 'demo@demo.com',
        password: 'hoang',
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
