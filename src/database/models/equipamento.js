'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipamento extends Model {
    static associate(models) {
      Equipamento.hasMany(models.Patrimonio, {
        foreignKey: 'equipamento_id'
      })
    }
  }
  Equipamento.init({
    categoria: DataTypes.STRING,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    processador: DataTypes.STRING,
    memoria: DataTypes.STRING,
    disco: DataTypes.STRING,
    quantidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Equipamento',
    tableName: 'equipamentos'
  });
  return Equipamento;
};