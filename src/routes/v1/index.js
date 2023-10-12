const express = require("express");
const router = express.Router();
const {
  validateGetTokenPrice,
} = require("../../middlewares/tokens-middleware");

const {
  validateAllowance,
  validateTransaction,
} = require("../../middlewares/approve-middleware");

const { validateSwap } = require("../../middlewares/swap-middleware");
const { validateGetQuote } = require("../../middlewares/quote-middleware");
const TokensController = require("../../controllers/tokens-controller");
const ApproveController = require("../../controllers/approve-controller");
const QuoteController = require("../../controllers/quote-controller");
const SwapController = require("../../controllers/swap-controller");

router.get("/tokens", TokensController.tokensList);
router.get(
  "/tokens/:address",
  validateGetTokenPrice,
  TokensController.getTokenPrice
);
router.get("/quote", validateGetQuote, QuoteController.quote);
router.get("/swap", validateSwap, SwapController.swap);
router.get(
  "/allowance/approve",
  validateAllowance,
  ApproveController.allowance
);
router.get(
  "/allowance/transaction",
  validateTransaction,
  ApproveController.allowance
);

module.exports = router;
