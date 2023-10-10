const { TokensRepository } = require("../repository/index");

const AppErrors = require("../utils/error-handler");

class TokensService {
  constructor() {
    this.tokensRepository = new TokensRepository();
  }

  async tokensList() {
    try {
      const tokens = await this.tokensRepository.getTokensList();
      return tokens;
    } catch (error) {
      console.log(error);
    }
  }

  async getTokenPrice(data) {
    try {
      const response = await this.tokensRepository.getATokenPrice(data);
      return response.data;
    } catch (error) {
      console.log(error);
      //throw { error };
    }
  }

  async getSwapQuote(tokenIn, tokenOut, tokenInAmount) {
    try {
      console.log("hittinggetSwap");
      const response = await this.tokensRepository.getSwapQuote(
        tokenIn,
        tokenOut,
        tokenInAmount
      );
      return response;
    } catch (error) {
      console.log(error);
      // throw { error };
    }
  }
}

module.exports = TokensService;
