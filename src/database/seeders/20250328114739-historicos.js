'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('historicos', [
      {
        patrimonio_id: 1,  
        saida: "nasit",
        entrada: "guandu",
        motivo: 'sem motivo',
        data: new Date().toISOString().split('T')[0], 
        alteracao: 'sem alteração',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('historicos', null, {});
  }
};
