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
      // console.log(
      //   "sending url",
      //   `${SPOT_PRICE_API_URL}${tokenAddress}?currency=USD`
      // );
      const response = await axios.get(
        `${SPOT_PRICE_API_URL}${tokenAddress}?currency=USD`,
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
          },
        }
      );
      //console.log('res',response.data)
      return response.data;
    } catch (error) {
      // console.log('erer',error.response.data.s)
      // console.error("Error fetching token price:", error);
      // return { error: error.response.data.description };
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~")
      console.log('ere',error.response)
       console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
      return error
    }
  }

  


}

module.exports = TokensRepository;
