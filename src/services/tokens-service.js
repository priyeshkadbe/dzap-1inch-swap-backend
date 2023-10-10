const { TokensRepository } = require("../repository/index");

class TokensService {
  constructor() {
    this.tokensRepository = new TokensRepository();
  }

  async tokensList() {
    try {
      const tokens = await this.tokensRepository.getTokensList();
      return tokens;
    } catch (error) {
      console.error("Error occurred while fetching tokens:", error);
      return {
        error: "Unable to fetch tokens. Please try again later.",
      };
    }
  }

  async getTokenPrice(data) {
    try {
      const response = await this.tokensRepository.getATokenPrice(data);
      return response.data;
    } catch (error) {
      console.error("Error occurred while fetching token price:", error);
      return {
        error: "Unable to fetch token price. Please try again later.",
      };
    }
  }

  async getSwapQuote(tokenIn, tokenOut, tokenInAmount) {
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

module.exports = TokensService;

