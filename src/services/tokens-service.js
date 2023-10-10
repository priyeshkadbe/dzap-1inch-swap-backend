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
      console.error("Error in fetching tokens list:", error.message);
      throw new Error("Unable to fetch tokens list");
    }
  }

  async getTokenPrice(tokenAddress) {
    try {
      const response = await this.tokensRepository.getATokenPrice(tokenAddress);
      return response;
    } catch (error) {
      console.error(
        `Error in fetching token price for address ${tokenAddress}:`,
        error.message
      );
      throw new Error("Unable to fetch token price");
    }
  }

  async getSwapQuote(tokenIn, tokenOut, tokenInAmount) {
    try {
      const response = await this.tokensRepository.getSwapQuote(
        tokenIn,
        tokenOut,
        tokenInAmount
      );
      return response;
    } catch (error) {
      console.error("Error in fetching swap quote:", error.message);
      throw new Error("Unable to fetch swap quote");
    }
  }
}

module.exports = TokensService;
