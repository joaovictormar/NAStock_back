'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('patrimonios', [
      {
        equipamento_id: 1, 
        patrimonio: '111',
        local: 'Locação',
        obs: 'Sem obs',
        empresa: 1, 
        serial: 'SN123456',
        entrada: new Date(),
        garantia: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        equipamento_id: 1, 
        patrimonio: '222',
        local: 'Locação',
        obs: 'Em uso',
        empresa: 1, 
        serial: 'SN654321',
        memoria: '16GB DDR4',
        disco: '500GB HD',
        entrada: new Date(),
        garantia: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        equipamento_id: 1, 
        patrimonio: '333',
        local: 'Aluguel',
        obs: 'Aguardando manutenção',
        empresa: 1, 
        serial: 'SN789012',
      
        entrada: new Date(),
        garantia: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), 
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('patrimonios', null, {});
  }
};
