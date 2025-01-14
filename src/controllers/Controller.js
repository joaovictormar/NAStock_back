class Controller {
    constructor(algumServico) {
        this.algumServico = algumServico
    }

    async PegaTodos (req, res) {
        try {
            const listaDeRegistros = await this.algumServico.PegaTodosOsRegistros()
            return res.status(200).json(listaDeRegistros)
        }
        catch (erro) {
            res.status(500).json({mensagem: `Erro ao buscar registros ${erro}`})
        }
    }

    async PegaUmRegistro (req, res) {
            const {id} = req.params;
        try {
            const registro = await this.algumServico.PegaUmRegistroPorId(Number(id))
            return res.status(200).json(registro)
            console.log(registro)
        }
        catch (erro) {
            res.status(500).json({mensagem: `Erro ao encontrar esse registro ${erro}`})
        }
    }

    async criaNovo (req, res) {
        const dadosParaCriacao = req.body;
        try {
            const registroCriado = await this.algumServico.criaRegistro(dadosParaCriacao)
            return res.status(200).json(registroCriado)
        }
        catch (erro) {
            res.status(500).json({mensagem: `Erro ao criar novo registro: ${erro}`})
        }
    }

    async atualiza (req, res) {
        const {id} = req.params;
        const dadosAtualizados = req.body;
        try {
            const registrosAtualizados = await this.algumServico.atualizaRegistro(dadosAtualizados, id)
            if(!registrosAtualizados) {
                return res.status(400).json({mensagem: `Erro ao atualizar registro`})
            }
            else {
                return res.status(200).json({mensagem: `O registro de id ${id} foi atualizado com sucesso`})    
            }
        }
        catch (erro) {
                return res.status(500).json({mensagem: `Erro ao atualizar registro: ${erro}`})
        }
    }
    
    async exclui (req, res){
        const {id} = req.params;
        try{
           await this.algumServico.excluiRegistro(Number(id)); 
           return res.status(200).json({mensagem: `Registro ${id} excluído com sucesso`})
        }
        catch (erro) {
            res.status(500).json({mensagem: `Erro ao excluir registro: ${erro}`})
        }
    }
};

module.exports = Controller;