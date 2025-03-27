'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historico extends Model {
    static associate(models) {
      Historico.belongsTo(models.Patrimonio, {
        foreignKey: 'patrimonio_id'
      })
    }
  }
  Historico.init({
    saida: DataTypes.STRING,
    entrada: DataTypes.STRING,
    data: DataTypes.DATE,
    motivo: DataTypes.STRING,
    alteracao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Historico',
    tableName: 'historicos',
  });
  return Historico;
};