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
      if (response.error) {
        const {error,statusCode,description} = response
        return { error, statusCode, description,success:false};
      }
      const {status,data}=response;
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
