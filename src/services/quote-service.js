const { QuoteRepository } = require("../repository/index");
const { ethers } = require("ethers");
class QuoteService {
  constructor() {
    this.quoteRepository = new QuoteRepository();
  }

  async quote(tokenIn, tokenOut, tokenInAmount) {
    try {
      // tokenInAmount= ethers.utils.parseEther("1").toString();
      const response = await this.quoteRepository.quote(
        tokenIn,
        tokenOut,
        tokenInAmount
      );
      console.log('er',response.error)
      if (response.error) {
        const { error, statusCode, description } = response.error;
        console.log("sending", error, statusCode, description);
        return { error, statusCode, description, success: false };
      }
      const { status, data } = response;
      return { status, data, success: true, error: "" };
    } catch (error) {
      console.error("Error occurred while fetching swap quote:", error);
      return;
    }
  }
}

module.exports = QuoteService;
