const express=require("express");
const adminRouter = require("../controller/adminController");


const route=express.Router();

route.post("/admin",adminRouter)

module.exports=route