'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('patrimonios', [
      {
        equipamento_id: 2,
        patrimonio: 14, 
        local: 'Estoque',
        obs: 'Sem obs',
        empresa: 'Guandu',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        equipamento_id: 1,
        patrimonio: 1140, 
        local: 'Estoque',
        obs: 'Em uso',
        empresa: 'CCM',
        createdAt: new Date(),
        updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('patrimonios', null, {});
  }
};