const Controller = require("./Controller.js");
const HistoricoService = require("../services/HistoricoService.js");

const historicoService = new HistoricoService();

class HistoricoController extends Controller {
    constructor() {
        super(historicoService)
    }
};

module.exports = HistoricoController;