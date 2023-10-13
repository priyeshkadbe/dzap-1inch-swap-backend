const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/index");
const { PORT } = require("./config/serverConfig");
const cors = require("cors");
const { default: axios } = require("axios");
const YAML = require("yamljs")
const swaggerDocument = YAML.load("./api.yaml");
const swaggerUi = require("swagger-ui-express");

// const swaggerSpec = require("./config/swaggerSpec");
const setupAndStartServer = () => {
  const app = express();
  app.use(cors());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: "true" }));
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use("/api", apiRoutes);
  app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
  });
};

setupAndStartServer();
