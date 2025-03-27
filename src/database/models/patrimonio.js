'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patrimonio extends Model {
    static associate(models) {
      Patrimonio.belongsTo(models.Equipamento, {
        foreignKey: 'equipamento_id'
      });
      Patrimonio.hasMany(models.Historico, {
        foreignKey: 'patrimonio_id'
      });
      Patrimonio.belongsTo(models.Cliente, {
        foreignKey: 'empresa'
      })
    }
  }
  Patrimonio.init({
    patrimonio: DataTypes.STRING,
    local: DataTypes.STRING,
    obs: DataTypes.STRING,
    memoria: DataTypes.STRING,
    disco: DataTypes.STRING,
    serial: DataTypes.STRING,
    entrada: DataTypes.DATE,
    garantia: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Patrimonio',
    tableName: 'patrimonios',
  });
  return Patrimonio;
};