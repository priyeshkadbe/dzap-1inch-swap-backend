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
      console.log("err", response);
      const { toAmount, gas } = response.data;
      console.log("To Amount:", toAmount);
      console.log("Gas:", gas);
      
      return response;

    } catch (error) {
      //console.error("Error fetching swap quote:", error);
      //return error
      console.log(
        "error.response.data.description ",
        error.response.data
      );
      return { error: error.response.data };
    }
  }

}

module.exports = QuoteRepository;