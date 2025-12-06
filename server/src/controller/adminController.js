
const userModel = require("../model/user.Model");
const adminRouter=async(req,res)=>{
    try {
        const getAdmin=await userModel.find({},{password:0})
        console.log(getAdmin);
        
        if(!getAdmin || userModel.length===0){
            return res.status(404).json("No Users found")
        }
        return res.status(200).json({
            message:"succesfull",
            getUser:getAdmin
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"internal server is down"
        })
        
    }
}

module.exports=adminRouter;