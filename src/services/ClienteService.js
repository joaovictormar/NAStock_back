const Services = require("../services/Service.js");
const dataSource = require("../database/models");

class ClienteService extends Services {
    constructor(){
        super("Cliente")
    }
};

module.exports = ClienteService;