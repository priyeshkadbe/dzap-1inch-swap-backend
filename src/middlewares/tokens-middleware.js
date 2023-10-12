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



module.exports = { validateGetTokenPrice };
