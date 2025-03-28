'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', [
      {
        cliente: 'Guandu',
        patrimonio: 'Patrimonio A',
        locado: 'Não',
        total: '50',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cliente: 'CCM',
        patrimonio: 'Patrimonio B',
        locado: 'Sim',
        total: '120',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};
