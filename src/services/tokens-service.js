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

  async tokenPrice(address) {
    try {
      const response = await this.tokensRepository.tokenPrice(address);
      if (response?.response?.data.error) {
        const { statusCode, error, description } = response.response.data;
        return { statusCode, error, description,success:false };
      }
      const {status,data}=response
      return { status, data, success: true };

    } catch (error) {
      return error
    }
  }
}

module.exports = TokensService;
