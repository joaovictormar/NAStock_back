'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('equipamentos', [
      {
        categoria: 'Desktop',
        marca: 'Dell',
        modelo: 'Precision Tower 5810',
        processador: 'Intel(R) Xeon(R) CPU E5-1620 v4',
        memoria: '32GB DDR4',
        disco: '1TB HD + 240GB SSD',
        quantidade: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoria: 'Telefone',
        marca: 'GrandStream',
        modelo: 'GXP1630',
        quantidade: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('equipamentos', null, {});
  }
};
