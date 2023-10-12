const { default: axios } = require("axios");
const { API_URL, BEARER_TOKEN } = require("../config/serverConfig");

class QuoteRepository {

  async quote(tokenIn, tokenOut, tokenInAmount) {
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
      // const { toAmount, gas } = response.data;
      
      return response;

    } catch (error) {

      console.log(
        "error.response.data.description ",
        error.response.data
      );
      return { error: error.response.data };
    }
  }

}

module.exports = QuoteRepository;