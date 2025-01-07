'use strict';

const equipamento = require('../models/equipamento');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patrimonios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      equipamento_id:{
        allowNull: false,
        references: {model: 'equipamentos' , key: 'id'},
        type: Sequelize.INTEGER
      },
      patrimonio: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      local: {
        allowNull: false,
        type: Sequelize.STRING
      },
      obs: {
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
    await queryInterface.dropTable('patrimonios');
  }
};