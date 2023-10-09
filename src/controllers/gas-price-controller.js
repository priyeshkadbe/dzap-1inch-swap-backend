const GasPriceService=require("../services/gas-price-service")

const gasPriceService = new GasPriceService();

const gasPriceController = async (req, res) => {
  try {
    const response = await gasPriceService.gasPrice();
    return res.status(201).json({
      message: "successfully fetch gas price",
      data: response,
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "unable to fetch tokens",
      data: {},
      success: false,
      err: error,
    });
  }
}

module.exports = {
  gasPriceController,
};