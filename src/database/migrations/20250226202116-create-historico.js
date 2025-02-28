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
      motivo: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.DATEONLY
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