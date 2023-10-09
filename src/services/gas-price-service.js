const {GasPriceRepository}=require("../repository/index")
class GasPriceService{
  constructor () {
    this.gasPriceRepository = new GasPriceRepository();
  }

  async gasPrice() {
    try {
      const response =await  this.gasPriceRepository.gasPrice();
      return response
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports=GasPriceService