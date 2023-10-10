const { default: axios } = require("axios");
const { API_URL, BEARER_TOKEN } = require("../config/serverConfig");
class TokensRepository {
  async getTokensList() {
    try {
      const response = await axios.get(API_URL + "tokens", {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching tokens list:", error.message);
      throw new Error("Unable to fetch tokens list from the server");
    }
  }

  async getATokenPrice(tokenAddress) {
    try {
      const response = await axios.get(
        `${API_URL}${tokenAddress}?currency=USD`,
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(
        `Error fetching token price for address ${tokenAddress}:`,
        error.message
      );
      throw new Error("Unable to fetch token price from the server");
    }
  }

  async getSwapQuote(tokenIn, tokenOut, tokenInAmount) {
    try {
      const response = await axios.get(`${API_URL}quote`, {
        params: {
          src: tokenIn,
          dst: tokenOut,
          amount: tokenInAmount,
          includeGas: true,
        },
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      });
      const { toAmount, gas } = response.data;
      console.log("To Amount:", toAmount);
      console.log("Gas:", gas);
      return response.data;
    } catch (error) {
      console.error("Error fetching swap quote:", error.message);
      throw new Error("Unable to fetch swap quote from the server");
    }
  }
}

module.exports = TokensRepository;
