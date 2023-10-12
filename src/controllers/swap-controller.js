const { StatusCodes } = require("http-status-codes");
const { SwapService } = require("../services/index");

const swapService = new SwapService();

const swap = async (req, res) => {

  try {
    const { tokenIn, tokenOut, tokenInAmount, callerAddress, slippage } =
      req.query;
    console.log("data", req.query);
    const response = await swapService.swap(
      tokenIn,
      tokenOut,
      tokenInAmount,
      callerAddress,
      slippage
    );
    if (!response.success) {

      return res.status(response.statusCode).json(response);
    }
    return res.status(response.status).json(response);
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "unable to fetch Swap tokens",
      data: {},
      success: false,
      err: error,
    });
  }


};

module.exports = { swap };
