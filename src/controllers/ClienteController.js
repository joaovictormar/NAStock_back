const Controller = require("./Controller.js");
const ClienteService = require("../services/ClienteService.js");

const clienteService = new ClienteService();

class ClienteController extends Controller {
    constructor() {
        super(clienteService);
    }
};

module.exports = ClienteController;
