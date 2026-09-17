import express from "express";
import healthRoutes from "./routes/health.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());

app.use("/api", healthRoutes);

app.use(errorHandler);

export default app;