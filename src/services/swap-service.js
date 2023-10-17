const { ethers } = require("ethers");
const { SwapRepository } = require("../repository/index");

class SwapService {
  constructor() {
    this.swapRepository = new SwapRepository();
  }

  async swap(tokenIn, tokenOut, tokenInAmount, callerAddress, slippage) {
    try {
      console.log("Fetching swap quote...");
      //tokenInAmount = ethers.utils.parseEther("1").toString();
      const response = await this.swapRepository.swap(
        tokenIn,
        tokenOut,
        tokenInAmount,
        callerAddress,
        slippage
      );
      if (response.error) {
        const { error, statusCode, description } = response.error;
        console.log("sending", error, statusCode, description);
        return { error, statusCode, description, success: false };
      }
      const { status, data } = response;
      return { status, data, success: true, error: "" };
    } catch (error) {
      console.error("Error occurred while fetching swap quote:", error);
      return;
    }
  }
}
module.exports = SwapService;

