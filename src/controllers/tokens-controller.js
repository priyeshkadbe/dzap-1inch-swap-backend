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

const getSwapQuote = async (req, res) => {
  try {
    const { tokenIn, tokenOut, tokenInAmount } = req.query;
    //console.log('data',req.body)
    const tokenPrice = await tokensService.getSwapQuote(
      tokenIn,
      tokenOut,
      tokenInAmount
    );
    return res.status(StatusCodes.OK).json({
      message: "successfully  a fetched Swap Quote ",
      data: tokenPrice,
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(StatusCodes.NOT_FOUND).json({
      message: "unable to fetch Swap quote",
      data: {},
      success: false,
      err: error,
    });
  }
};

const swap = async (req, res) => {
  try {
    const { tokenIn, tokenOut, tokenInAmount, callerAddress, slippage } =
      req.query;
    //console.log('data',req.body)
    const tokenPrice = await tokensService.swap(
      tokenIn,
      tokenOut,
      tokenInAmount,
      callerAddress,
      slippage
    );
    return res.status(StatusCodes.OK).json({
      message: "successfully  Swapped the tokens ",
      data: tokenPrice,
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "unable to fetch Swap tokens",
      data: {},
      success: false,
      err: error,
    });
  }
};

module.exports = {
  tokensList,
  getTokenPrice,
  getSwapQuote,
  swap,
};
