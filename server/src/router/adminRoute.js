const express=require("express");
const adminRouter = require("../controller/adminController");


const route=express.Router();

route.get("/admin",adminRouter)

module.exports=route