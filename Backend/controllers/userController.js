const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const validate = require("validator");

const login = async function (req, res) {
  try {
    const { email, password } = req.body;

    //  Email format validation
    if (!validate.isEmail(email)) {
      return res.status(400).json({
        status: false,
        message: "Please enter a valid email address",
      });
    }

    // Check if user exists or not
    const user = await userModel.findByEmail(email);

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "The user does not exist",
      });
    }

    // password validating if exists or not
    if (user.password !== password) {
      return res.status(401).json({
        status: false,
        message: "Incorrect password",
      });
    }

    // JWT Token generated
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    //save the token  in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.json({
      status: true,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

const logout = async function (req, res) {
  res.cookie("token", "", { maxAge: 1 });
  return res.status(200).json({ message: "Logged Out Successfully" });
};

module.exports = { login, logout };
