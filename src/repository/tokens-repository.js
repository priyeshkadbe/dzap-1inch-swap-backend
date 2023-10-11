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
      return { error: error.response.data.description };
    }
  }

  async getATokenPrice(tokenAddress) {
    try {
      const response = await axios.get(
        `${SPOT_PRICE_API_URL}${tokenAddress}?currency=USD`,
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching token price:", error);
      return { error: error.response.data.description };
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
      return { error: error.response.data.description };
    }
  }

  async swap(tokenIn, tokenOut, tokenInAmount,callerAddress,slippage) {
    try {
      console.log("calling swap")
      const response = await axios.get(`${API_URL}swap`, {
        params: {
          src: tokenIn,
          dst: tokenOut,
          amount: tokenInAmount,
          from: callerAddress,
          slippage:slippage,
          includeGas: true
        },
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      });
      console.log("res",response)
      return response.data;

    } catch (error) {
      console.error("Error fetching swap quote:", error.response.data.description);
      return { error: error.response.data.description };

    }
  }
}

module.exports = TokensRepository;
