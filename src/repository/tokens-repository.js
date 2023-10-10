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
      console.log(error);
      throw { error };
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
      return response;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async getSwapQuote(tokenIn, tokenOut, tokenInAmount) {
    try {
      console.log("fdf", tokenIn, tokenOut, tokenInAmount);
      const response = await axios.get(`{API_URL}quote`, {
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
      console.log(error);
      throw { error };
    }
  }
}

module.exports = TokensRepository;
