const {Router} = require('express');
const ClienteController = require('../controllers/ClienteController.js');

const clienteController = new ClienteController();

const router = Router();

route.get('/clientes', (req, res) => clienteController.PegaTodos(req, res));
route.get('/clientes/:id', (req, res) => clienteController.PegaUmRegistro(req, res));

module.exports = router;