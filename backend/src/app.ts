import express from "express";
import cors from "cors";

import { env } from "./config/env.js";

import healthRoutes from "./routes/health.routes.js";
import linkedinRoutes from "./routes/linkedin.routes.js";

import {
  notFoundMiddleware
} from "./middleware/not-found.middleware.js";

import {
  errorMiddleware
} from "./middleware/error.middleware.js";

const app = express();

app.use(
  cors({
    origin: env.FRONTEND_URL
  })
);

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    service: "LinkedIn Profile API",
    version: "1.0.0"
  });
});

app.use(
  "/health",
  healthRoutes
);

app.use(
  "/api/linkedin",
  linkedinRoutes
);

app.use(
  notFoundMiddleware
);

app.use(
  errorMiddleware
);

export default app;