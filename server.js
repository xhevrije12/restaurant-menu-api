import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import menuRoutes from "./routes/menu.routes.js";
import errorMiddleware from "./middleware/error.middleware.js";

dotenv.config();

const app = express();

// GLOBAL ERROR HANDLING
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
});

// middleware për JSON
app.use(express.json());

// lidhja me DB
connectDB();

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);

// TEST ENDPOINT - VENDOS PËR PARA ERROR MIDDLEWARE
app.get("/test", (req, res) => {
  res.json({ success: true, message: "Server po punon" });
});

// error handler
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
