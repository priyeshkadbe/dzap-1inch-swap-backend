const { SwapRepository } = require("../repository/index");

class SwapService {
  constructor() {
    this.swapRepository = new SwapRepository();
  }

  async swap(tokenIn, tokenOut, tokenInAmount, callerAddress, slippage) {
    try {
    } catch (error) {}
  }
}
module.exports = SwapService;

