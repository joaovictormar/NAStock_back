const Controller = require("./Controller.js");
const PatrimonioService = require("../services/PatrimonioService.js");
const EquipamentoService = require("../services/EquipamentoService.js");

const equipamentoService = new EquipamentoService();
const patrimonioService = new PatrimonioService();

class PatrimonioController extends Controller {
    constructor() {
        super(patrimonioService);
    }
    
    async PegaRegistrosDeEstoque(req, res) {
        try {
            const registrosDeEstoque = await patrimonioService.PegaTodosOsRegistros({where : {local: "Estoque"}});
            return res.status(200).json(registrosDeEstoque);
        } catch (erro) {
            res.status(500).json({ mensagem: `Erro ao buscar registros de estoque: ${erro.message}` });
        }
    }

    async PegaRegistrosDeLocacao(req, res) {
        try {
            const registrosDeEstoque = await patrimonioService.PegaTodosOsRegistros({where : {local: "Locação"}});
            return res.status(200).json(registrosDeEstoque);
        } catch (erro) {
            res.status(500).json({ mensagem: `Erro ao buscar registros de locação: ${erro.message}` });
        }
    }

    async criaNovoPatrimonio(req, res) {
        const { equipamento_id, patrimonio, local, obs, empresa } = req.body;
        try {
            
            const patrimonioExistente = await patrimonioService.PegaUm({ patrimonio });
            if (patrimonioExistente) {
                return res.status(400).json({ error: 'Este patrimônio já existe.' });
            }

            const quantidadeDePatrimoniosVinculadoAUmEquipamento = await patrimonioService.contaRegistrosPorCampo({equipamento_id}) +1;
            const quantidadeDosEquipamentosDessePatrimonio = await equipamentoService.pegaQuantidadePorEquipamentoId(equipamento_id);

            if (quantidadeDePatrimoniosVinculadoAUmEquipamento > quantidadeDosEquipamentosDessePatrimonio) {
                return res.status(400).json({ error: `Este equipamento possui ${quantidadeDosEquipamentosDessePatrimonio} unidades que já estão vinculadas a algum patrimônio.` });
            }

            const newPatrimonio = await patrimonioService.criaRegistro({
                equipamento_id,
                patrimonio,
                local,
                obs,
                empresa
            });

            res.status(201).json(newPatrimonio);
            
        } catch (error) {
            console.error('Erro ao criar patrimônio:', error);
            res.status(500).json({ error: `Erro ao criar patrimônio: ${error.message}` });
        }
    }
}

module.exports = PatrimonioController;
