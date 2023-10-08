const { default: axios } = require("axios");
const { TokensService } = require("../services/index");

const tokensService = new TokensService();

const tokensList = async (req, res) => {
  console.log("hitting");
  try {
    const response = await tokensService.tokensList();
    return res.status(201).json({
      message: "successfully fetch all the tokens",
      data: response,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
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
    return res.status(201).json({
      message: "successfully  a token price ",
      data: tokenPrice,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "unable to a tokens",
      data: {},
      success: false,
      err: error,
    });
  }
}



module.exports = {
  tokensList,
  getTokenPrice,
};
