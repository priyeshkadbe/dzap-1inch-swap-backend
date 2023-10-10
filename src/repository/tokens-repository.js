const { default: axios } = require("axios");
const {
  API_URL,
  BEARER_TOKEN,
  SPOT_PRICE_API_URL,
} = require("../config/serverConfig");

class TokensRepository {
  async getTokensList() {
    try {
      const response = await axios.get(API_URL + "tokens/", {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      //console.error("Error fetching tokens:", error);
      return { error: "Unable to perform the operation at the moment." };
    }
  }

  async getATokenPrice(tokenAddress) {
    try {
      const response = await axios.get(
        `${SPOT_PRICE_API_URL}+${tokenAddress}?currency=USD`,
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching token price:", error);
      return { error: "Unable to fetch token price at the moment." };
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
      //console.error("Error fetching swap quote:", error);
      return { error: "Unable to fetch swap quote at the moment." };
    }
  }
}

module.exports = TokensRepository;
