'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      Cliente.hasMany(models.Patrimonio, {
      foreignKey: 'empresa'
      })
    }
  }
  Cliente.init({
    cliente: DataTypes.STRING,
    patrimonio: DataTypes.STRING,
    locado: DataTypes.STRING,
    total: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
    tableName: 'clientes',
  });
  return Cliente;
};