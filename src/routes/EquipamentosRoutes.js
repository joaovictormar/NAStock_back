const {Router} = require("express");
const EquipamentoController = require("../controllers/EquipamentoController.js");

const equipamentoController = new EquipamentoController();

const router = Router();

router.get("/equipamentos", (req,res) => equipamentoController.PegaTodos(req,res));
router.get("/equipamentos/:id", (req,res) => equipamentoController.PegaUmRegistro(req,res));
router.post("/equipamentos", (req,res) => equipamentoController.criaNovo(req,res));
router.put("/equipamentos", (req,res) => equipamentoController.atualiza(req,res));
router.delete("/equipamentos/:id", (req,res) => equipamentoController.exclui(req,res));


module.exports = router;
