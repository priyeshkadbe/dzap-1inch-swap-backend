const { ApproveRepository } = require("../repository/index");

class ApproveService {
  constructor() {
    this.approveRepository = new ApproveRepository();
  }

  async allowance(tokenAddress, walletAddress) {
    try {
      const response = await this.approveRepository.allowance(
        tokenAddress,
        walletAddress
      );
      //console.log("-----------");
      if (response.error) {
        // console.log("-----------");
        console.log("error hai", response.error,response.statusCode,response.description)
        // console.log("-----------");
        // response.statusCode
        // return {  };
        const {error,statusCode,description} = response
        return { error, statusCode, description,success:false};
      }
      const {status,data}=response
    //console.log("data hai", response);
    //  console.log("-----------");
      return {status,data,success:true,error:""};
    } catch (error) {
      return error;
    }
  }

  async transaction(tokenAddress, amount) {
    try {
      const response = await this.approveRepository.transaction(
        tokenAddress,
        amount
      );
        if (response.error) {
          const { error, statusCode, description } = response;
          return { error, statusCode, description, success: false };
        }
        const { status, data } = response;
        return { status, data, success: true, error: "" };
    } catch (error) {
      return error;
    }
  }
}

module.exports = ApproveService;
