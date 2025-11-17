const express = require("express");
const isAuthenticated = require("../middlewares/userAuth");
const { login, logout } = require("../controllers/userController");
const { getData } = require("../controllers/textsController");
const { translation } = require("../controllers/termsController");
const { getPriceList } = require("../controllers/pricelistController");

const userRouter = express.Router();

userRouter.post("/login", login); //route the login module
userRouter.post("/logout", logout); //route the logout module
userRouter.get("/priceList", isAuthenticated, getPriceList); //route the price list module and protect it with jwt token
userRouter.get("/text", getData); //route the getData module for translation of texts (ENG - SWE)
userRouter.get("/terms", translation); //route the translation module for translation of texts (ENG - SWE)

module.exports = userRouter; //export router model
