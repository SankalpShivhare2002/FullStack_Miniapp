const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const validate = require('validator')

//login controller
const login = async function(req, res) {
  const { email, password } = req.body;
  
  //check for correct email format
  if(!validate.isEmail(email)){
    return res.status(401).json({
        status:false,
        message:'Please enter a valid email address'});
  }

  //check for the user email
  const user = await userModel.findByEmail(email);
  console.log(user);
  
  if(!user){
    res.status(401).json({
        status:false,
        message:'Then user does not exist'
    });
}
 //check if user password exists
  if(user.password !== password){
    res.json({
        status:false,
        message:"Enter a valid password"
    });
  }

  // Generate jwt token
  const token = jwt.sign({id: user?.id}, process.env.JWT_SECRET, {
   expiresIn: '2d', //token expires in 2days
  });
  console.log(token);
  
  //set the token into a cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure : true,
    sameSite:'strict',
    maxAge: 24*60*60*1000 //max age of cookie is 1 day
  });
  
  //send response on successful login
  res.json({ status: true, message: "Login successful" });
}

//logout controller
const logout = async function(req, res){
    res.cookie("token", "",{maxAge:1});
    res.status(200).json({message:"Logged Out Successfully"});
}
module.exports = {login,logout};  //export modules