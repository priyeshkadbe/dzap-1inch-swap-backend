const { ApproveService } = require("../services/index");
const { StatusCodes } = require("http-status-codes");

const approveService = new ApproveService();

const allowance = async (req, res) => {
  try {
    const { tokenAddress, walletAddress } = req.query;
    const response = await approveService.allowance(
      tokenAddress,
      walletAddress
    );
    if (!response.success) {
      return res.status(response.statusCode).json(response);
    }
    return res.status(response.status).json(response);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "unable to get allowance at this moment",
      success: false,
    });
  }
};

const transaction = async (req, res) => {
  try {
    const { tokenAddress, amount } = req.query;
    const response = await approveService.transaction(tokenAddress, amount);
    if (!response.success) {
      return res.status(response.statusCode).json(response);
    }
    return res.status(response.status).json(response);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "unable to get transaction",
      success: false,
    });
  }
};

module.exports = {
  allowance,
  transaction,
};
