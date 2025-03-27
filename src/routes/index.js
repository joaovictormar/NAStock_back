const express = require("express");
const equipamentos = require("./EquipamentosRoutes.js");
const patrimonios = require("./PatrimoniosRoutes.js");
const historicos = require("./HistoricoRoutes.js");
const clientes = require("./ClienteRoutes.js");

const rotas = (app) => {
    app.use(
        express.json(),
        equipamentos,
        patrimonios,
        historicos,
        clientes
    );
};

module.exports = rotas;
