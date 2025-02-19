const Controller = require("./Controller.js");
const HistoricoService = require("../services/HistoricoService.js");

const historicoService = new HistoricoService();

class HistoricoController extends Controller {
    constructor() {
        super(historicoService)
    }

    async PegaRegistrosDeHistoricoDosPatrimonios (req, res) {
        try {
            const patrimonio_id = req.params.patrimonio_id;
            const registrosDeHistorico = await historicoService.pegaRegistrosPorPatrimonioID(patrimonio_id);
            return res.status(200).json(registrosDeHistorico);
        }
        catch (error) {
            console.log(`Erro ao buscar registros de histórico: ${error}`)
            
        }
    }
};

module.exports = HistoricoController;