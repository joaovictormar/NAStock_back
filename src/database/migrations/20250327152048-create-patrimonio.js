'use strict';
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
      empresa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'clientes', 
          key: 'id'
        }},
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
      obs: {
        type: Sequelize.STRING
      },
      memoria: {
        type: Sequelize.STRING
      },
      disco: {
        type: Sequelize.STRING
      },
      serial: {
        allowNull: false,
        type: Sequelize.STRING
      },
      entrada: {
        allowNull: false,
        type: Sequelize.DATE
      },
      garantia: {
        allowNull: false,
        type: Sequelize.DATE
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