import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";


export const registration = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const exitUser = await User.findOne({ email });
        if (exitUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Enter valid email" });
        }
        if (password.length < 8) {
            return res.status(400).json({ message: "Enter Strong password" });
        }
        let hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        let token = await genToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(201).json(user);
    } catch (error) {
        console.log("User Registration failed", error);
        return res.status(500).json({ message: "User Registration failed" });
    }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Generate token and set cookie here
    return res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.log("Login failed", error);
    return res.status(500).json({ message: "Login failed" });
  }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.log("Logout failed", error);
    return res.status(500).json({ message: "Logout failed" });
    }
}