const { default: axios } = require("axios");
const {
  API_URL,
  BEARER_TOKEN,
  SPOT_PRICE_API_URL,
} = require("../config/serverConfig");

class ApproveRepository {
  async allowance(tokenAddress, walletAddress) {
    try {
      console.log("allowance repository");
      const response = await axios.get(API_URL + "approve/allowance", {
        params: {
          tokenAddress,
          walletAddress,
        },
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error.response.data);
      return error.response.data;
    }
  }

  async transaction(tokenAddress, amount) {
    try {
      const response = await axios.get(API_URL + "approve/transaction", {
        params: {
          tokenAddress,
          amount,
        },
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      });
      console.log("response",response.data)
      return response;
    } catch (error) {
      return { error: "now found allowance" };
    }
  }
}

module.exports = ApproveRepository;
