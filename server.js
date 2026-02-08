import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import menuRoutes from "./routes/menu.routes.js";
import profileRoutes from "./routes/profile.routes.js"; // ✅ import profile
import errorMiddleware from "./middleware/error.middleware.js";

dotenv.config();

const app = express();

// JSON middleware
app.use(express.json());

// Lidhja me DB
connectDB();

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/profile", profileRoutes); // ✅ vendosëm profile

// Test endpoint
app.get("/test", (req, res) => {
  res.json({ success: true, message: "Server po punon" });
});

// Error handler
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
