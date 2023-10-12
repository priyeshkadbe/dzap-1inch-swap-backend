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
      return { error: error.response.data.description };
    }
  }

  async tokenPrice(address) {
    try {
      const response = await axios.get(
        `${SPOT_PRICE_API_URL}${address}?currency=USD`,
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
          },
        }
      );
      console.log("res", response);
      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = TokensRepository;
