const { default: axios } = require("axios");
const { TokensService } = require("../services/index");
const { StatusCodes } = require("http-status-codes");

const tokensService = new TokensService();

const tokensList = async (req, res) => {
  console.log("hitting");
  try {
    const response = await tokensService.tokensList();
    return res.status(StatusCodes.OK).json({
      message: "successfully fetch all the tokens",
      data: response,
      success: true,
      err: {},
    });
  } catch (error) {
    //console.log(error);
    return res.status(StatusCodes.NO_CONTENT).json({
      message: "unable to fetch tokens",
      data: {},
      success: false,
      err: error,
    });
  }
};

const getTokenPrice = async (req, res) => {
  try {
    const address = req.params.address;
    const tokenPrice = await tokensService.getTokenPrice(address);
    return res.status(StatusCodes.OK).json({
      message: "successfully  a token price ",
      data: tokenPrice,
      success: true,
      err: {},
    });
  } catch (error) {
    //console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "unable to a token price",
      data: {},
      success: false,
      err: error,
    });
  }
};




module.exports = {
  tokensList,
  getTokenPrice};
