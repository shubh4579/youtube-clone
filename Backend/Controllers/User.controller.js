import User from "../Models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const cookieOptions = {
  httpOnly: true,
  secure: false, //Set true in production
  sameSite: "Lax",
};
export const signUp = async (req, res) => {
  try {
    const { channelName, userName, about, profilePic, password } = req.body;
    const isExist = await User.findOne({ userName });
    if (isExist) {
      res.status(400).json({
        error: "Username already exists Please try with other username",
      });
    } else {
      let updatedPass = await bcrypt.hash(password, 10);
      const user = new User({
        channelName,
        userName,
        about,
        profilePic,
        password: updatedPass,
      });
      await user.save();
      res.status(201).json({
        message: "User registered successfully",
        success: "yes",
        data: user,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const signIn = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ userId: user._id }, "Shubham");
      res.cookie("token", token, cookieOptions);
      res.json({
        message: "Logged in successfully",
        success: "true",
        token,
        user,
      });
    } else {
      res.status(401).json({
        error: "Invalid username or password",
        success: "false",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("token", cookieOptions)
    .json({ message: "Logged out successfully" });
};
