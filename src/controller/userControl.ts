import { Request, Response } from "express";
import User, { UserDocument } from "../model/user";

const register = async (req: Request, res: Response) => {
  console.log("user registration");
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(404).json({ message: "Email is already taken" });
  }
  
  try {
    const user = await User.create({ email, password });
    const token = user.createJWT();
    res.status(201).json({ user: { email: user.email }, token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }

  try {
    const user: UserDocument | null = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid authentication" });
    }
    const token = user.createJWT();
    res.status(200).json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  register,
  login,
};
