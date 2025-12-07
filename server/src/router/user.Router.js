const express=require("express");
const { register, findUser } = require("../controller/userController");
const route=express.Router();

//register rotue..
route.post("/reg",register)
route.get("/users",findUser)
module.exports=route