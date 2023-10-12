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

      return response;
    } catch (error) {
      return error;
    }
  }

  async transaction(tokenAddress, amount) {
    try {
      const response = await this.approveRepository.allowance(
        tokenAddress,
        amount
      );

      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = ApproveService;
