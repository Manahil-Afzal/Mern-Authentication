import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Connect DB
connectDB();

// Middleware
app.use("/api/auth", authRouter);
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

// Routes
app.use("/api/auth", authRouter);

// Test Route
app.post("/api/auth/test", (req, res) => {
  res.json({ success: true, message: "✅ Test route is working" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
