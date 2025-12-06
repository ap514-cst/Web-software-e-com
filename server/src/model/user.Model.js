const mongoose=require("mongoose");

const userModel=mongoose.Schema({
    name:{
        type:String,
        require
    },
    email:{
        type:String,
        require
    },
    password:{
        type:String,
        require
    }


})
module.exports=mongoose.model("users",userModel)