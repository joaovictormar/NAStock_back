'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('equipamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoria: {
        allowNull: false,
        type: Sequelize.STRING
      },
      marca: {
        allowNull: false,
        type: Sequelize.STRING
      },
      modelo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      processador: {
        type: Sequelize.STRING
      },
      memoria: {
        type: Sequelize.STRING
      },
      disco: {
        type: Sequelize.STRING
      },
      quantidade: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('equipamentos');
  }
};