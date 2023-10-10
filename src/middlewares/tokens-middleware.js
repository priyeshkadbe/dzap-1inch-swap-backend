
const validateGetTokenPrice = (req, res, next) => {
  console.log('dfd')
  if (!req.params.address) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: "token address missing in the  request",
    });
  }
  next();
};


const validateGetQuote = (req, res, next) => {
  console.log("hittingGas");
  const { tokenIn, tokenOut, tokenInAmount } = req.query;
  if (!tokenIn || !tokenOut || !tokenInAmount) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: "required values are missing",
    });
  }
  next();
}

module.exports = { validateGetTokenPrice, validateGetQuote };
