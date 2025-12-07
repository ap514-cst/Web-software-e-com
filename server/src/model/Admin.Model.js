const mongoose=require("mongoose");

const adminModel=mongoose.Schema({
    email:{
        type:String,
        require
    },
    password:{
        type:String,
        require
    }
})

const adminSchema=mongoose.model("admin",adminModel)

module.exports=adminSchema;