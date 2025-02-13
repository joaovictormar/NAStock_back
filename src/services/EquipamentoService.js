const Services = require("./Service.js");
const dataSource = require("../database/models");

class EquipamentoService extends Services {
    constructor() {
        super("Equipamento")
    }

    async pegaQuantidadePorEquipamentoId(equipamento_id) {

        const patrimonio = await dataSource.Patrimonio.findOne({
            where: { equipamento_id },  
        });

        if (!patrimonio) {
            return 1; 
        }
        const equipamento = await dataSource.Equipamento.findOne({
            where: { id: patrimonio.equipamento_id }, 
            attributes: ['quantidade'], 
        });

        return equipamento ? equipamento.quantidade : null;
    }
};

module.exports = EquipamentoService;