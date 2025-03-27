const services = require("../services/ClienteService.js");
const dataSource = require("../database/models");

class ClienteService extends services {
    constructror(){
        super("Cliente")
    }
};

module.exports = ClienteService;