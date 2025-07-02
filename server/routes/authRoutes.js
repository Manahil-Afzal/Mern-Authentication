// server/routes/authRoutes.js
import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register); // ✅ /api/auth/register
router.post("/login", login);       // ✅ /api/auth/login
router.get("/profile", (req, res) => {
  res.json({ message: "User profile endpoint is working" }); // optional
});

export default router;
