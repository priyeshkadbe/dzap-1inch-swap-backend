const { QuoteService } = require("../services/index")

const quoteService = new QuoteService();

const quote = async (req, res) => {
  try {
    const { tokenIn, tokenOut, tokenInAmount } = req.query;
    //console.log('data',req.body)
    const tokenPrice = await quoteService.quote(
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

module.exports = {quote};