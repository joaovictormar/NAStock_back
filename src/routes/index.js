const express = require("express");

const rotas = (app) => {
    app.use(express.json());
};

module.exports = rotas;
