const {Router} = require("express");
const HistoricoController = require("../controllers/HistoricoController.js");

const historicoController = new HistoricoController();

const router = Router();

router.get("/historico", (req,res) => historicoController.PegaTodos(req,res));
router.get("/historico/:id", (req,res) => historicoController.PegaUmRegistro(req,res));
router.get("/historico/patrimonio/:patrimonio_id", (req,res) => historicoController.PegaRegistrosDeHistoricoDosPatrimonios(req,res));
router.post("/historico", (req,res) => historicoController.criaNovo(req,res));
router.delete("/historico/:id", (req, res) => historicoController.exclui(req,res));


module.exports = router;