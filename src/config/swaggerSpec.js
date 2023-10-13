const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "1.0.0",
    info: {
      title: "1 inch Documenation",
      version: "1.0.0",
      description: "Description of your API",
    },
  },
  apis: ["../routes/v1/index.js"], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
