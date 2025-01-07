const Controller = require("./Controller.js");
const PatrimonioService = require("../services/PatrimonioService.js");

const patrimonioService = new PatrimonioService();

class PatrimonioController extends Controller {
    constructor() {
        super(patrimonioService)
    }
};

module.exports = PatrimonioController;