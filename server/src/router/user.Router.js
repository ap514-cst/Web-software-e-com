const express=require("express");
const { register } = require("../controller/userController");
const route=express.Router();

//register rotue..
route.post("/reg",register)

module.exports=route