const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  API_URL: process.env.API_URL,
  SPOT_PRICE_API_URL:process.env.SPOT_PRICE_API_URL,
  BEARER_TOKEN: process.env.BEARER_TOKEN,
};
