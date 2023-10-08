const { default: axios } = require("axios");

class TokensRepository {
  async getTokensList() {
    try {
      const response = await axios.get(
        "https://api.1inch.dev/swap/v5.2/1/tokens",
        {
          headers: {
            Authorization: "Bearer QDioxYhpgFdChISamIheQ3zsPEPAc1Xa",
            Cookie:
              "__cf_bm=RWmF4P.eq_k7JHh59nCPtPnATIy_XrR5Hcv0XElCf1M-1696761397-0-AQZ+U9TqJ9a1Prox+nX8G1L7qR3vXqw1ZYir03J24ySIavr448+Jg9QuuJW/AbEgH8OJtCXDbnNxkEofvd6f4YA=",
          },
        }
      );
      //console.log("resonse is ",response)
      return response.data;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }
  //http://localhost:5000/api/v1/tokens?address=0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0
  async getATokenPrice(tokenAddress) {
    try {
      const response = await axios.get(
        `https://api.1inch.dev/price/v1.1/1/${tokenAddress}?currency=USD`,
        {
          headers: {
            Authorization: "Bearer QDioxYhpgFdChISamIheQ3zsPEPAc1Xa",
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }
}

module.exports = TokensRepository;
