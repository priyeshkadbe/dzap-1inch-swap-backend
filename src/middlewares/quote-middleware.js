const { StatusCodes } = require("http-status-codes");

const validateGetQuote = (req, res, next) => {
  const { tokenIn, tokenOut, tokenInAmount } = req.query;
  if (!tokenIn || !tokenOut || !tokenInAmount) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: "required values are missing",
    });
  }
  next();
};

module.exports = { validateGetQuote };
