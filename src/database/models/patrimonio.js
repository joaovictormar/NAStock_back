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
      })
    }
  }
  Patrimonio.init({
    patrimonio: DataTypes.INTEGER,
    local: DataTypes.STRING,
    obs: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patrimonio',
    tableName: 'patrimonios'
  });
  return Patrimonio;
};