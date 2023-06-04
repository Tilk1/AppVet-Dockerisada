'use strict';
require('../globals.js');
module.exports = {
  /** @type {import('sequelize-cli').Migration} */
  async up(queryInterface, Sequelize) {
    const moment = require('moment');
    const faker = require('faker');
    await queryInterface.bulkInsert('mascotas', [{
      nombre: 'Luna',
      raza: RAZAS.GOLDEN_RETRIEVER,
      color: 'Dorado',
      fecha_nacimiento: moment('2018-07-15').toDate(),
      observaciones: 'Tiene una mancha blanca en la pata izquierda',
      foto: null,
      UserId: 3,
    }], {});
    await queryInterface.bulkInsert('mascotas', [{
      nombre: 'Diana',
      raza: RAZAS.PITBULL,
      color: 'Blanco',
      fecha_nacimiento: moment('2019-05-17').toDate(),
      observaciones: 'Es juguetona y le gusta correr',
      foto: null,
      UserId: 4,
    }], {});
    await queryInterface.bulkInsert('mascotas', [{
      nombre: 'Leona',
      raza: RAZAS.CRUZA,
      color: 'Negra',
      fecha_nacimiento: moment('2018-01-12').toDate(),
      observaciones: 'Es panzona y le gusta dormir',
      foto: null,
      UserId: 6,
    }], {});
    await queryInterface.bulkInsert('mascotas', [{
      nombre: 'Mimi',
      raza: RAZAS.CANICHE,
      color: 'Blanca',
      fecha_nacimiento: moment('2018-01-12').toDate(),
      observaciones: 'Ladra mucho y le gusta comer',
      foto: null,
      UserId: 3, //JUANCHO
    }], {});
    await queryInterface.bulkInsert('mascotas', [{
      nombre: 'Bart',
      raza: RAZAS.SALCHICHA,
      color: 'Marron',
      fecha_nacimiento: moment('2018-01-12').toDate(),
      observaciones: 'Es muy cariñoso y le gusta jugar con la pelota',
      foto: null,
      UserId: 5, //NAMI
    }], {});
    await queryInterface.bulkInsert('mascotas', [{
      nombre: 'Chuchi',
      raza: RAZAS.SALCHICHA,
      color: 'Marron',
      fecha_nacimiento: moment().clone().subtract(5, 'months').toDate(),
      observaciones: 'Es muy cariñoso y le gusta jugar con la pelota',
      foto: null,
      UserId: 6, //AGUSTINA
    }], {});
    await queryInterface.bulkInsert('mascotas', [{
      nombre: 'Vani',
      raza: RAZAS.PITBULL,
      color: 'Negro',
      fecha_nacimiento: moment().clone().subtract(1, 'months').toDate(),
      observaciones: 'Es muy cariñoso y le gusta jugar con la pelota',
      foto: null,
      UserId: 3, //JUANCHO
    }], {});
    await queryInterface.bulkInsert('mascotas', [{
      nombre: 'Rudo',
      raza: RAZAS.GOLDEN_RETRIEVER,
      color: 'Negro',
      fecha_nacimiento: moment().clone().subtract(3, 'months').toDate(),
      observaciones: 'Es muy cariñoso y le gusta jugar con la pelota',
      foto: null,
      UserId: 3,
    }], {});
    await queryInterface.bulkInsert('mascotas', [{
      nombre: 'Syndra',
      raza: RAZAS.CRUZA,
      color: 'Negro',
      fecha_nacimiento: moment().clone().subtract(6, 'months').toDate(),
      observaciones: 'Es muy cariñoso y le gusta jugar con la pelota',
      foto: null,
      UserId: 6,
    }], {});
    await queryInterface.bulkInsert('mascotas', [{
      nombre: 'Salem',
      raza: RAZAS.CRUZA,
      color: 'Negro',
      fecha_nacimiento: moment().clone().subtract(3, 'months').toDate(),
      observaciones: 'Es muy cariñoso y le gusta jugar con la pelota',
      foto: null,
      UserId: 7,
    }], {});
    await queryInterface.bulkInsert('mascotas', [{
      nombre: 'Stevie',
      raza: RAZAS.GOLDEN_RETRIEVER,
      color: 'Amarillo',
      fecha_nacimiento: moment().clone().subtract(5, 'months').toDate(),
      observaciones: 'Es muy cariñoso y activo',
      foto: null,
      UserId: 8,
    }], {});
    for (let i = 0; i < 0; i++) {
      const today = new Date();
      const minDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
      await queryInterface.bulkInsert('mascotas', [{
        nombre: faker.name.firstName(),
        raza: faker.random.arrayElement([RAZAS.GOLDEN_RETRIEVER, RAZAS.CANICHE, RAZAS.LABRADOR , RAZAS.BULLDOG, RAZAS.PITBULL, RAZAS.PASTOR_ALEMAN, RAZAS.CRUZA]),
        color: faker.random.arrayElement(['Negro', 'Blanco', 'Amarillo', 'Marron', 'Blanco y Negro', 'Amarillo y Marron', 'Gris', 'Gris y Blanco']),
        fecha_nacimiento: faker.date.between(minDate, today),
        observaciones: faker.random.arrayElement(['Es muy jugueton', 'Es muy nervioso', 'Agresivo', 'Calmado']),
        foto: null,
        UserId: faker.datatype.number({ min: 3, max: 8 }),
      }], {});
    }
  },

  async down(queryInterface, Sequelize) {
    // Comandos para revertir la inserción de datos
  }
};