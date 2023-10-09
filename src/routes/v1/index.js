const express = require("express");
const router = express.Router();
const TokensController = require("../../controllers/tokens-controller");
const { validateGetTokenPrice } = require("../../middlewares/tokens-middleware");
const GasPriceController=require("../../controllers/gas-price-controller")
router.get("/tokens", TokensController.tokensList);
router.get("/tokens/:address", validateGetTokenPrice, TokensController.getTokenPrice);
router.get("/gas-price",GasPriceController.gasPriceController)
module.exports = router;
