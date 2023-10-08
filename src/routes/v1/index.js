const express = require("express");
const router = express.Router();
const TokensController = require("../../controllers/tokens-controller");
const { validateGetTokenPrice } = require("../../middlewares/tokens-middleware");

router.get("/tokens", TokensController.tokensList);
router.get("/tokens/:address", validateGetTokenPrice, TokensController.getTokenPrice);

module.exports = router;
