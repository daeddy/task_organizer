import path from "path";
import { generateApi } from "swagger-typescript-api";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const swaggerUrl =
  process.env.SWAGGER_URL || "http://localhost:8080/swagger/doc.json";

generateApi({
  name: "api.ts",
  // set to `false` to prevent the tool from writing to disk
  output: path.resolve(process.cwd(), "./src/__generated__"),
  url: swaggerUrl,
  httpClientType: "axios",
  modular: true,
  generateClient: true,
  generateRouteTypes: false,
  generateResponses: true,
});
