const express = require("express");
const router = express.Router();
const TokensController = require("../../controllers/tokens-controller");
const { validateGetTokenPrice,validateGetQuote, validateSwap } = require("../../middlewares/tokens-middleware");

router.get("/tokens", TokensController.tokensList);
router.get("/tokens/:address", validateGetTokenPrice, TokensController.getTokenPrice);
router.get("/get-quote", validateGetQuote, TokensController.getSwapQuote);
router.get("/swap",validateSwap,TokensController.swap)
module.exports = router;