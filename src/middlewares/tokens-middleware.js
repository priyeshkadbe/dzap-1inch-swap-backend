const { StatusCodes } = require("http-status-codes");

const validateGetTokenPrice = (req, res, next) => {
  console.log("dfd");
  if (!req.params.address) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: "token address missing in the  request",
    });
  }
  next();
};

// const validateGetQuote = (req, res, next) => {
//   console.log("hittingGas");
//   const { tokenIn, tokenOut, tokenInAmount } = req.query;
//   if (!tokenIn || !tokenOut || !tokenInAmount) {
//     return res.status(StatusCodes.BAD_REQUEST).json({
//       success: false,
//       data: {},
//       message: "something went wrong",
//       err: "required values are missing",
//     });
//   }
//   next();
// };


// const validateSwap = (req, res, next) => {
//   const { tokenIn, tokenOut, tokenInAmount, callerAddress, slippage } = req.query;
//   if (!tokenIn ||
//     !tokenOut ||
//     !tokenInAmount ||
//     !callerAddress ||
//     !slippage) {
//     return res.status(StatusCodes.BAD_REQUEST).json({
//       success: false,
//       data: {},
//       message: "something went wrong",
//       err: "required values are missing",
//     });
//   }
//   next();
// }

module.exports = { validateGetTokenPrice };
