const { StatusCodes } = require("http-status-codes");

const validateTokenPrice = (req, res, next) => {
  if (!req.params.address) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      data: {},
      err: "token address missing",
    });
  }
  next();
};



module.exports = { validateTokenPrice };
