const {Router} = require('express');
const ClienteController = require('../controllers/ClienteController.js');

const clienteController = new ClienteController();

const router = Router();

router.get('/clientes', (req, res) => clienteController.PegaTodos(req, res));
router.get('/clientes/:id', (req, res) => clienteController.PegaUmRegistro(req, res));
router.post('/clientes', (req,res) => clienteController.criaNovo(req,res));
router.delete('/clientes/:id', (req,res) => clienteController.exclui(req,res));

module.exports = router;