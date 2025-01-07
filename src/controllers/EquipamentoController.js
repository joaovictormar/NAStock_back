const Controller = require("./Controller.js");
const EquipamentoService = require("../services/EquipamentoService.js")

const equipamentoService = new EquipamentoService();

class EquipamentoController extends Controller {
    constructor() {
        super(equipamentoService)
    }
};

module.exports = EquipamentoController;