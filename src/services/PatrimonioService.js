const Services = require("./Service.js");

class PatrimonioService extends Services {
    constructor() {
        super("Patrimonio");
    }

    async PegaRegistrosPorLocal(local) {
        return super.PegaTodosOsRegistros({
            where: { local }
        })
    }
}

module.exports = PatrimonioService;
