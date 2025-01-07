const {Router} = require("express");
const PatrimonioController = require("../controllers/PatrimonioController.js")

const patrimonioController = new PatrimonioController;

const router = Router();

router.get("/patrimonios", (req,res) => patrimonioController.PegaTodos(req,res));
router.get("/patrimonios/:id", (req,res) => patrimonioController.PegaUmRegistro(req,res));
router.post("/patrimonios", (req,res) => patrimonioController.criaNovo(req,res));
router.put("/patrimonios/:id", (req,res) => patrimonioController.atualiza(req,res));
router.delete("/patrimonios/:id", (req,res) => patrimonioController.exclui(req,res));

module.exports = router;