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
      const { toAmount, gas } = response.data;
      console.log("To Amount:", toAmount);
      console.log("Gas:", gas);
      return response.data;
    } catch (error) {
      //console.error("Error fetching swap quote:", error);
      return { error: error.response.data.description };
    }
  }

}

module.exports = QuoteRepository;