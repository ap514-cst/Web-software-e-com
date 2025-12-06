const express=require("express");
const mongoose=require("mongoose")
const cors=require("cors")
require("dotenv").config();
const userRoute=require("./src/router/user.Router")
const adminRoute=require("./src/router/adminRoute")
const app=express();

//middleware..
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use("/api/user",userRoute)
app.use("/api/users/",adminRoute)
//import port.
const PORT=process.env.PORT || 4001;
const MONGO_URI=process.env.MONGO_URI;

//listening server..
app.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`);
  mongoose.connect(MONGO_URI)
  .then(()=>{console.log("Database is connect");
  }).catch((err)=>{console.log(err);
  })
})
