const userModel = require("../../models/userModel")
const bcrypt=require('bcryptjs')


async function userSignUpController(req,res){
    try{
        const { email, password, name,profilePic} = req.body

        const user = await userModel.findOne({email})

        console.log("user",user)

        if(user){
            throw new Error("Already user exits.")
        }

        if(!email){
           throw new Error("Please provide email")
        }
        if(!password){
            throw new Error("Please provide password")
        }
        if(!name){
            throw new Error("Please provide name")
        }

        const salt= await bcrypt.genSalt(10);
        const hashPassword= await bcrypt.hash(password,salt)

        const payload={
           ...req.body,
            role:"GENERAL",
            password:hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save()

        res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : "User created Successfully!"
        })


    }catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
}

module.exports = userSignUpController