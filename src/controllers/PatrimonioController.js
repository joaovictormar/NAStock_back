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
    async criaNovoPatrimonio(req, res) {
        const { equipamento_id, patrimonio, local, obs } = req.body;

        try {
            const existingPatrimonio = await patrimonioService.pegaUmRegistroPorCampo({ patrimonio });
            if (existingPatrimonio) {
                return res.status(400).json({ error: 'Patrimônio já existe.' });
            }

            const newPatrimonio = await patrimonioService.criaRegistro({
                equipamento_id,
                patrimonio,
                local,
                obs
            });

            res.status(201).json(newPatrimonio);
        } catch (error) {
            console.error('Erro ao criar patrimônio:', error);
            res.status(500).json({ error: 'Erro ao criar patrimônio.' });
        }
    }
}

module.exports = PatrimonioController;
