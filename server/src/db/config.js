const MONGO_URI=process.env.MONGO_URI;
const mongoose=require("mongoose")
const dataBaseConfig=async()=>{
    mongoose.connect(MONGO_URI)
    .then(()=>{console.log("Database is connect");
    }).catch((err)=>{console.log(err);
    })
}

module.exports=dataBaseConfig