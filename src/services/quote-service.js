const { QuoteRepository } = require("../repository/index");

class QuoteService {
  constructor() {
    this.quoteRepository = new QuoteRepository();
  }

  async quote(tokenIn, tokenOut, tokenInAmount) {
    try {
      console.log("Fetching swap quote...");
      const response = await this.tokensRepository.getSwapQuote(
        tokenIn,
        tokenOut,
        tokenInAmount
      );
      return response;
    } catch (error) {
      console.error("Error occurred while fetching swap quote:", error);
      return {
        error: "Unable to fetch swap quote. Please try again later.",
      };
    }
  }
}

module.exports = QuoteService;