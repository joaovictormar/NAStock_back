const Services = require("./Service.js");
const dataSource = require("../database/models");

class HistoricoService extends Services {
    constructor() {
        super("Historico");
    }

    async pegaRegistrosPorPatrimonioID(patrimonio_id) {
        return super.PegaTodosOsRegistros({
            where: {patrimonio_id}
        })
    }
}

module.exports = HistoricoService;