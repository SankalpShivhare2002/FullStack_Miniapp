const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const userRouter = require("./routes/userRouter");
require("../Backend/utils/db");
require('dotenv').config();                 

//defining port number to host server
const PORT = process.env.PORT || 3001

//middlewares
app.use(express.json()); //pass incoming json data
app.use("/api/users", userRouter); //routes
app.use(express.urlencoded({ extended: true })); //middleware to read data from html forms
app.use(cookieParser()); //pass the cookie automatically
//start the server
    app.listen(PORT, ()=>{
    console.log(`Server is running on Port ${PORT}`);
    })
    
