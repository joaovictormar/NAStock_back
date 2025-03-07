const Services = require("./Service.js");
const dataSource = require("../database/models");

class PatrimonioService extends Services {
    constructor() {
        super("Patrimonio");
    }

    async PegaUltimoPatrimonio() {
        const ultimoPatrimonio = await dataSource.Patrimonio.findOne({
            order: [["id", "DESC"]],
        });

        return ultimoPatrimonio ? ultimoPatrimonio.patrimonio : null;
    }
}

module.exports = PatrimonioService;
