const { API_URL, BEARER_TOKEN } = require("../config/serverConfig");

class SwapRepository {


  async swap(tokenIn, tokenOut, tokenInAmount, callerAddress, slippage) {
    try {
      console.log("calling swap");
      const response = await axios.get(`${API_URL}swap`, {
        params: {
          src: tokenIn,
          dst: tokenOut,
          amount: tokenInAmount,
          from: callerAddress,
          slippage: slippage,
          includeGas: true,
        },
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      });
      console.log("res", response);
      return response.data;
    } catch (error) {
      console.error(
        "Error fetching swap quote:",
        error.response.data.description
      );
      return { error: error.response.data.description };
    }
  }


} 

module.exports = SwapRepository;