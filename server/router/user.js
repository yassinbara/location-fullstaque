const express = require("express");
const {
  getAllUsers
} = require("../controller/user");
const userRoute = express.Router();

userRoute.get("/", getAllUsers);



module.exports = userRoute;
