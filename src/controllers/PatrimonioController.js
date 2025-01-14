const Controller = require("./Controller.js");
const PatrimonioService = require("../services/PatrimonioService.js");

const patrimonioService = new PatrimonioService();

class PatrimonioController extends Controller {
    constructor() {
        super(patrimonioService);
    }
    
    async PegaRegistrosDeEstoque(req, res) {
        try {
            const registrosDeEstoque = await patrimonioService.PegaRegistrosPorLocal("Estoque");
            return res.status(200).json(registrosDeEstoque);
        } catch (erro) {
            res.status(500).json({ mensagem: `Erro ao buscar registros de estoque: ${erro}` });
        }
    }

    async PegaRegistrosDeLocacao (req, res) {
        try {
            const registrosDeEstoque = await patrimonioService.PegaRegistrosPorLocal("Locação")
            return res.status(200).json(registrosDeEstoque);
        } catch (erro) {
            res.status(500).json({ mensagem: `Erro ao buscar registros de estoque: ${erro}` });
        }
    }
}

module.exports = PatrimonioController;
