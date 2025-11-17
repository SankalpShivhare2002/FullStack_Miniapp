const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

//AUthentication middleware logic
const isAuthenticated = asyncHandler(async (req, res, next) => {
  try {
    if (req.cookies.token ) { // to verify the token coming from cookies
      const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
      console.log(decoded);
      
    } else {
      return res.status(401).json({
        status: false,
        message: "Not authorized. No token found",
      });
    }
    next(); // move to the next middleware/controller
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "Invalid or expired token.",
    });
  }
});

module.exports = isAuthenticated;
