const Services = require("./Service.js");
const dataSource = require("../database/models");

class HistoricoService extends Services {
    constructor() {
        super("Historico");
    }
}

module.exports = HistoricoService;