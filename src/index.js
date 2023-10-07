const express = require("express");
const bodyParser = require("body-parser");
// const apiRoutes = require("./routes/index");
// const db = require("./models/index");

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extends: "true" }));
  // app.use("/api", apiRoutes);
  app.listen(PORT, async () => {
    // console.log(`server is running at port ${PORT}`);
    // if (SYNC_DB) {
    //   db.sequelize.sync({ alter: true });
    // }
    console.log("app is running");
  });
};

setupAndStartServer();
