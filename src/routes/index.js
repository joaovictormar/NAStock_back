const express = require("express");
const equipamentos = require("./EquipamentosRoutes.js");
const patrimonios = require("./PatrimoniosRoutes.js");

const rotas = (app) => {
    app.use(
        express.json(),
        equipamentos,
        patrimonios
    );
};

module.exports = rotas;
