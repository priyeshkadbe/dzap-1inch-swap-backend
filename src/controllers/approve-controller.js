const { ApproveService } = require("../services/index")
const { StatusCodes } = require("http-status-codes");

const approveService=new ApproveService()

const allowance = async (req,res) => {
  try {
   
    const { tokenAddress, walletAddress } = req.query;
    const response = await approveService.allowance(tokenAddress, walletAddress)
     return res.status(StatusCodes.OK).json({
       message: "successfully fetched the allowance",
       data: response,
       success: true,
       err: {},
     });
    
  } catch (error) {
    return res.status(StatusCodes.NO_CONTENT).json({
      message: "unable to get allowance",
      data: {},
      success: false,
      err: error,
    });
  }
}



const transaction = async (req, res) => {
  try {
   
    const { tokenAddress, amount } = req.query;
    const response = await approveService.transaction(
      tokenAddress,
      walletAddress
    );
    return res.status(StatusCodes.OK).json({
      message: "successfully fetch the transaction",
      data: response,
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(StatusCodes.NO_CONTENT).json({
      message: "unable to get transaction",
      data: {},
      success: false,
      err: error,
    });
  }
};




module.exports = {
  allowance,
  transaction,
};