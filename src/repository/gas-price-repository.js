const { default: axios } = require("axios");
class GasPriceRepository {
  async gasPrice() {
    try {
      const response = await axios.get(
        "https://api.1inch.dev/gas-price/v1.4/1",
        {
          headers: {
            Authorization: "Bearer QDioxYhpgFdChISamIheQ3zsPEPAc1Xa"
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }
}

module.exports = GasPriceRepository;
