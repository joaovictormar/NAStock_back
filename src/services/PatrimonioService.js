const Services = require("./Service.js");
const dataSource = require("../database/models");

class PatrimonioService extends Services {
    constructor() {
        super("Patrimonio");
    }

    async PegaRegistrosPorLocal(local) {
        return super.PegaTodosOsRegistros({
            where: { local }
        });
    }

    async pegaUmRegistroPorCampo(campo) {
        return super.PegaUm(campo);
    }

    async contaPatrimoniosVinculadosAosEquipamentos(equipamento_id) {
        return super.contaRegistrosPorCampo({ equipamento_id });
    }

}

module.exports = PatrimonioService;
