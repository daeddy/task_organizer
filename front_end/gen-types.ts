import path from "path";

import dotenv from "dotenv";
import { generateApi } from "swagger-typescript-api";

// Load environment variables from .env file
dotenv.config();

const swaggerUrl = process.env.BACKEND_URL || "http://localhost:8080";

generateApi({
  name: "api.ts",
  // set to `false` to prevent the tool from writing to disk
  output: path.resolve(process.cwd(), "./src/__generated__"),
  url: `${swaggerUrl}/swagger/doc.json`,
  httpClientType: "axios",
  modular: true,
  generateClient: true,
  generateRouteTypes: false,
  generateResponses: true,
});
