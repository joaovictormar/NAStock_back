'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('historicos', [
      {
        patrimonio_id: 89,
        saida: "nasit",
        entrada: "guandu",
        data: new Date().toISOString().split('T')[0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('historicos', null, {});
  }
};
