const tokensList = (req, res, next) => {
  next();
};

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

module.exports = { validateGetTokenPrice };
