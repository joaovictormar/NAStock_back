const {Router} = require("express");
const HistoricoController = require("../controllers/HistoricoController.js");

const historicoController = new HistoricoController();

const router = Router();

router.get("/historico", (req,res) => historicoController.PegaTodos(req,res));

module.exports = router;