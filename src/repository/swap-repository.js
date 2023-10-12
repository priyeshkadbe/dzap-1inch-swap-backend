const { default: axios } = require("axios");
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
       
      return response;
      
    } catch (error) {
       console.log("error.response.data.description ", error.response.data);
       return { error: error.response.data };
    }
  }


} 

module.exports = SwapRepository;