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
      const response = await axios.get(API_URL + "approve/transaction", {
        params: {
          tokenAddress,
          walletAddress,
        },
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
      return { error: "now found allowance" };
    }
  }

  async transaction(tokenAddress, amount) {
    try {
      const response = await axios.get(API_URL + "approve/allowance", {
        params: {
          tokenAddress,
          amount,
        },
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      return { error: "now found allowance" };
    }
  }
}

module.exports = ApproveRepository;
