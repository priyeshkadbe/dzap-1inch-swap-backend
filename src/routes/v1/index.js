const express = require("express");
const router = express.Router();
const TokensController = require("../../controllers/tokens-controller");
const { validateGetTokenPrice,validateGetQuote } = require("../../middlewares/tokens-middleware");

router.get("/tokens", TokensController.tokensList);
router.get("/tokens/:address", validateGetTokenPrice, TokensController.getTokenPrice);
router.get("/get-quote", validateGetQuote, TokensController.getSwapQuote);
module.exports = router;
