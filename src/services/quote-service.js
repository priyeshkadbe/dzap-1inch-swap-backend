const { QuoteRepository } = require("../repository/index");

class QuoteService {
  constructor() {
    this.quoteRepository = new QuoteRepository();
  }

  async quote(tokenIn, tokenOut, tokenInAmount) {
    try {
      console.log("Fetching swap quote...");
      const response = await this.quoteRepository.quote(
        tokenIn,
        tokenOut,
        tokenInAmount
      );

      // if (response.error) {
      //   const { error, statusCode, description } = response;
      //   console.log (error.error, error.statusCode, error.description );
      // }
      // return response;
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
