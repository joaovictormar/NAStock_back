'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('historicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patrimonio_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'patrimonios', key: 'id' }
      },
      saida: {
        type: Sequelize.STRING
      },
      entrada: {
        type: Sequelize.STRING
      },
      data: {
        allowNull: false,
        type: Sequelize.DATE
      },
      motivo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      alteracao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('historicos');
  }
};