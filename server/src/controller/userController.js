const userModel=require("../model/user.Model");
const bcrypt=require("bcryptjs")
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required: name, email, password"
            });
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email already exists"
            });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create new user with hashed password
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword // Store hashed password
        });

        // Save user to database
        const savedUser = await newUser.save();

        // Remove password from response for security
        const userResponse = {
            _id: savedUser._id,
            name: savedUser.name,
            email: savedUser.email,
            
        };

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: userResponse
        });

    } catch (error) {
        console.error("Registration error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
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