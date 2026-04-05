// routes/stockRoutes.js
const router = require("express").Router();
const ctrl = require("../controllers/stockController");

router.get("/live/:symbol", ctrl.getLive);

router.post("/stocks", ctrl.createStock);
router.get("/stocks", ctrl.getStocks);
router.put("/stocks/:id", ctrl.updateStock);
router.delete("/stocks/:id", ctrl.deleteStock);

module.exports = router;