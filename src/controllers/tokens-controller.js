const { TokensService } = require("../services/index");

const tokensService = new TokensService();

const tokensList = async (req, res) => {
  try {
    const response = await tokensService.tokensList();
    return res.status(200).json({
      message: "Successfully fetched all tokens",
      data: response,
      success: true,
      error: null,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Unable to fetch tokens",
      data: null,
      success: false,
      error: "Internal server error",
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
    console.error(error);
    return res.status(500).json({
      message: "Unable to fetch token price",
      data: null,
      success: false,
      error: "Internal server error",
    });
  }
};

const getSwapQuote = async (req, res) => {
  try {
    const { tokenIn, tokenOut, tokenInAmount } = req.query;
    console.log("data", req.body);
    const tokenPrice = await tokensService.getSwapQuote(
      tokenIn,
      tokenOut,
      tokenInAmount
    );
    return res.status(200).json({
      message: "successfully  a fetched Quote ",
      data: tokenPrice,
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to fetch swap quote",
      data: null,
      success: false,
      error: "Internal server error",
    });
  }
};

module.exports = {
  tokensList,
  getTokenPrice,
  getSwapQuote,
};
