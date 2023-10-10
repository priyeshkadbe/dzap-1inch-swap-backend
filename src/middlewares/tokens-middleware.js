
const validateGetTokenPrice = (req, res, next) => {
  if (!req.params.address) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "Token address is missing in the request",
      error: "Bad Request",
    });
  }
  next();
};


const validateGetQuote = (req, res, next) => {
  const { tokenIn, tokenOut, tokenInAmount } = req.query;
  if (!tokenIn || !tokenOut || !tokenInAmount) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "Required values are missing in the request",
      error: "Bad Request",
    });
  }
  next();
}

module.exports = { validateGetTokenPrice, validateGetQuote };
