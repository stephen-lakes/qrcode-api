import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import { Application } from "express";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "QR Code Generation API",
    version: "1.0.0",
    description: "API for generating QR codes in various formats",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/app.ts"], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Application) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
