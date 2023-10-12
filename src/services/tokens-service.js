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
      console.log("-----------------");
      console.log("res", response);
      console.log("-----------------");
      return response;
    } catch (error) {
      //console.error("Error occurred while fetching token price:", error);
      // console.log("error", error.response.data.description )
      return error
    }
  }
}

module.exports = TokensService;
