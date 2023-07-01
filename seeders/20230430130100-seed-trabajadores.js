 'use strict';
 require('../globals.js');
 /** @type {import('sequelize-cli').Migration} */
 module.exports = {
   async up (queryInterface, Sequelize) {

    
    await queryInterface.bulkInsert('trabajadores', [{
     nombre: "Nicolas Robin",
     email: "nicoRobin@gmail.com",
     servicio: "Paseador",
     zona: ZONAS.PASO,
     estado: true,
    }], {});

    await queryInterface.bulkInsert('trabajadores', [{
      nombre: "Nicolas Robin",
      email: "nicoRobin@gmail.com",
      servicio: "Paseador",
      zona: ZONAS.MORENO,
      estado: true,
     }], {});

     await queryInterface.bulkInsert('trabajadores', [{
      nombre: "Nicolas Robin",
      email: "nicoRobin@gmail.com",
      servicio: "Paseador",
      zona: ZONAS.MORENO,
      estado: true,
     }], {});

     await queryInterface.bulkInsert('trabajadores', [{
      nombre: "Nicolas Robin",
      email: "nicoRobin@gmail.com",
      servicio: "Paseador",
      zona: ZONAS.MORENO,
      estado: true,
     }], {});
 

    await queryInterface.bulkInsert('trabajadores', [{
     nombre: "Jessica Vaisman",
     email: "jessVaisman@gmail.com",
     servicio: "Cuidador,Paseador",
     zona: ZONAS.MORENO,
     estado: true,
      }], {});

    await queryInterface.bulkInsert('trabajadores', [{
     nombre: "Victoria Paz",
     email: "vickypeace@gmail.com",
     servicio: "Paseador",
     zona: ZONAS.SAN_MARTIN,
     estado: true,
    }], {});

    await queryInterface.bulkInsert('trabajadores', [{
     nombre: "Patitas Felices",
     email: "patitasFe@gmail.com",
     servicio: "Guarderia",
     zona: ZONAS.ISLAS_MALVINAS,
     estado: true,
    }], {});

    await queryInterface.bulkInsert('trabajadores', [{
      nombre: "Patitas Felices",
      email: "patitasFe@gmail.com",
      servicio: "Guarderia",
      zona: ZONAS.ISLAS_MALVINAS,
      estado: true,
     }], {});

     await queryInterface.bulkInsert('trabajadores', [{
      nombre: "Patitas Felices",
      email: "patitasFe@gmail.com",
      servicio: "Guarderia",
      zona: ZONAS.MORENO,
      estado: true,
     }], {});

     await queryInterface.bulkInsert('trabajadores', [{
      nombre: "Patitas Felices",
      email: "patitasFe@gmail.com",
      servicio: "Guarderia",
      zona: ZONAS.PASO,
      estado: true,
     }], {});

     await queryInterface.bulkInsert('trabajadores', [{
      nombre: "Patitas Felices",
      email: "patitasFe@gmail.com",
      servicio: "Guarderia",
      zona: ZONAS.ROCHA,
      estado: true,
     }], {});

     await queryInterface.bulkInsert('trabajadores', [{
      nombre: "Patitas Felices",
      email: "patitasFe@gmail.com",
      servicio: "Guarderia",
      zona: ZONAS.ISLAS_MALVINAS,
      estado: true,
     }], {});
 

},

   async down (queryInterface, Sequelize) {
     // Comandos para revertir la inserción de datos
   }

 };
