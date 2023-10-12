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
    console.log(error);
    return res.status(StatusCodes.NO_CONTENT).json({
      message: "unable to fetch tokens",
      data: {},
      success: false,
      err: error,
    });
  }
};

const tokenPrice = async (req, res) => {
  try {
    const address = req.params.address;
    console.log("address", address);
    const response = await tokensService.tokenPrice(address);
    if (!response.success) {
      return res.status(response.statusCode).json(response);
    }
    return res.status(response.status).json(response);
  } catch (error) {
    
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
  tokenPrice,
};
