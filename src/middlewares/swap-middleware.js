const { StatusCodes } = require("http-status-codes");

const validateSwap = (req, res, next) => {
  const { tokenIn, tokenOut, tokenInAmount, callerAddress, slippage } =
    req.query;
  if (!tokenIn || !tokenOut || !tokenInAmount || !callerAddress || !slippage) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: "required values are missing",
    });
  }
  next();
};
module.exports = { validateSwap };
