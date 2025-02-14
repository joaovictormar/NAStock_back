const {Router} = require("express");
const HistoricoController = require("../controllers/HistoricoController.js");

const historicoController = new HistoricoController();

const router = Router();

router.get("/historico/:id", (req,res) => historicoController.PegaUmRegistro(req,res));
router.get("/historico/patrimonios", (req,res) => historicoController.PegaTodos(req,res));
router.get("/historico/patrimonios/:patrimonio_id", (req,res) => historicoController.PegaUmRegistro(req,res));

module.exports = router;