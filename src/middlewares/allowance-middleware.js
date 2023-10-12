const { StatusCodes } = require("http-status-codes");
const validateAllowance = (req, res, next) => {
  const { tokenAddress, walletAddress } = req.query;

  if (!tokenAddress || !walletAddress) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: "required values are missing",
    });
  }
  console.log("ext");
  next();
};


const validateTransaction = (req, res, next) => {
  const { tokenAddress, amount } = req.query;

  if (!tokenAddress || !amount) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: "required values are missing",
    });
  }
  console.log("ext");
  next();
};


module.exports = { validateAllowance, validateTransaction };
