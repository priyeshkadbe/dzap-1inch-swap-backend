const { SwapService } = require("../services/index");

const swapService = new SwapService();

const swap = async (req, res) => {
  try {
    const { tokenIn, tokenOut, tokenInAmount, callerAddress, slippage } =
      req.query;
    //console.log('data',req.body)
    const tokenPrice = await swapService.swap(
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

module.exports = {swap};
