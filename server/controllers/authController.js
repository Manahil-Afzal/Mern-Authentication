// controllers/authController.js
import bcrypt from "bcrypt";
import User from "../models/userModel.js"; // ✅ correct import

// Register controller
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
   if (!name || !email || !password) {
  return res.status(400).json({ message: "All fields are required" });
}

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Respond with user info
    res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      message: "User registered successfully",
    });

  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error during registration" });
  }
};
