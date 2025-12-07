const userModel=require("../model/user.Model");

const register=async(req,res)=>{
    try {
        const {
            name,
            email,
            password}=req.body;
        const exjisUser=await userModel.findOne({email});
        if(exjisUser){
            return res.json({
                message:"email already exjist"
            })
        }
        const addUser=new userModel({name,email,password})
        const newUser=await addUser.save()
        if(newUser){
            res.status(202).json({
                succesu:true,
                message:"succefull data send database",
                newUser
            })
        }
        
    } catch (error) {
        console.log(error);
        res.states(500).json({
            message:"internel server is down "
        })
        
    }
}

const findUser=async(req,res)=>{
    try {
        
        const users=await userModel.find()
        if(users){
            res.status(202).json({
                sucecess:true,
                message:"user data found",
                users:users
            })
        }
    } catch (error) {
        console.log(error);
        res.states(500).json({
            message:"internel server is down"
        })

    }
}

module.exports={
    register,
    findUser
}