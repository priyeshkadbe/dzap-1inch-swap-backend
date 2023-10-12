const {StatusCodes} =require("http-status-codes")
const { QuoteService } = require("../services/index")

const quoteService = new QuoteService();

const quote = async (req, res) => {


  try {
    const { tokenIn, tokenOut, tokenInAmount } = req.query;
    const response = await quoteService.quote(tokenIn, tokenOut, tokenInAmount);
    if (!response.success) {
      return res.status(response.statusCode).json(response);
    }
    return res.status(response.status).json(response);
    
  } catch (error) {
    return res.status(StatusCodes.NOT_FOUND).json({
      description: error.description,
      data: {},
      success: false,
      err: error,
    });
  }

};

module.exports = {quote};