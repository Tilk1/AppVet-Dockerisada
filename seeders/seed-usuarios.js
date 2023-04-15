'use strict';
const faker = require('faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 0; i < 5; i++) {
      await queryInterface.bulkInsert('users', [{
        mail: faker.name.firstName()+"@gmail.com",
        name: faker.name.firstName()+faker.name.lastName(),
        rol: 'user',
        pass: '123'
      }], {});
    }
  },

  async down (queryInterface, Sequelize) {
    // Comandos para revertir la inserción de datos
  }
};