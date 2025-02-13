const dataSource = require("../database/models")

class Services {
    constructor(algumModelo) {
        this.algumModelo = algumModelo
    }
    async PegaTodosOsRegistros(options = {}) {
        return dataSource[this.algumModelo].findAll(options)
    }
    async PegaUmRegistroPorId(id) {
        return dataSource[this.algumModelo].findByPk(id)
    }
    async criaRegistro (dadosDoRegistro) {
        return dataSource[this.algumModelo].create(dadosDoRegistro)
    }
    async atualizaRegistro (dadosAtualizados, id) {
        const listaDeRegistroAtualizados = dataSource[this.algumModelo].update(dadosAtualizados, {
            where: {
                id: id
            }
        })
        if (listaDeRegistroAtualizados[0] === 0) {
            return false   
        }
            return true
    }
    async excluiRegistro(id) {
        return dataSource[this.algumModelo].destroy({where: {id:id}})
    }

    async PegaUm(where) {
        return dataSource[this.algumModelo].findOne({ where });
    }

    async contaRegistrosPorCampo(campo) {
        return dataSource[this.algumModelo].count({ where: campo });
    }
    
};

module.exports = Services;