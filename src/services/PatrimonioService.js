const Services = require("./Service.js");
const dataSource = require("../database/models");

class PatrimonioService extends Services {
    constructor() {
        super("Patrimonio");
    }

}

module.exports = PatrimonioService;
