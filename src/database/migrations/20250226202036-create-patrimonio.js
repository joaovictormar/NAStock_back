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
      equipamento_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'equipamentos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      patrimonio: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true 
      },
      local: {
        allowNull: false,
        type: Sequelize.STRING
      },
      empresa: {
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