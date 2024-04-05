import {User} from "../Models/user.model.js"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"

const generateAccessAndRefreshTokens = async(userId)=>{
    try{
        const user = await User.findById(userId)
        console.log("user found")
        //generateAccessToken and refresh token are methods and hence they end with ()
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        console.log("tokens generated")

        //refresh tokens are saved in database unlike access tokens
        user.refreshToken = refreshToken 

        //validateBeforeSave is used to skip the presence of certain field set to "required:true" while defining the mongoose models
        await user.save({validateBeforeSave :false})

        return {accessToken,refreshToken}


    }catch(error){
        throw new Error("Something went wrong while generating refresh and access tokens")
    }

}

const registerUser = async(req, res) =>{
    try{
        const {name,email,password} = req.body;


        //validation - check for empty fields
        if([name,email,password].some((field)=>{
            field?.trim() ===""
        })){
            res.status(400).json({message:"All field are required"})
        }

        //check if the user already exists

        try {
        const userExists = await User.findOne({email})
            if(userExists){
                return res.status(400).json({
                    message:"Username with the same email already exists"
                }
                )
            }
        } catch (error) {
            console.log("An error occured while searching for an already existing user",error)
            
        }

        const user = await User.create({
            email,
            password,
            name
        });

        console.log("User created");

        //removes password and refreshToken field from response
        const createdUser = await User.findById(user._id).select("-password -refreshToken");

        if(!createdUser){
            throw new Error("User not created")
        }

        //return response
        return res.status(200).json({
            createdUser,
            message:"User created successfully"
        })
    }
    catch(error){
        console.log("Error registering user",error);
        return res.status(500).json({error:"Internal server error"})
    }
}




const loginUser = async(req,res)=>{
        const {email, password} = req.body
    
    
        if(!email){
            res.json({
                message:"Username or Email is required"
            })
        }
    
        const user =await User.findOne({email})
    

        if(!user){
            res.json({
                message:"User doesn't exist"
            })
        }
    
        const isPasswordValid = await user.isPasswordCorrect(password);
        console.log("password correct")
    
        if(!isPasswordValid){
            res.json({
                message:"Invalid password"
            })
        }
    
        const {accessToken,refreshToken}= await generateAccessAndRefreshTokens(user._id)
    
        const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
    
        console.log(loggedInUser)

        const options={
            //these two settings make sure that the cookies are only modifiable through the backend
            httpOnly:true,
            secure:true
        }
    
        return res
        .status(200)
        .cookie("accessToken",accessToken,options)
        .cookie("refreshToken",refreshToken,options)
        .json("User logged in")
    
}




const logoutUser= async(req,res)=>{
    await User.findByIdAndUpdate(req.user._id,{
        $set: {refreshToken:undefined }
    })

    const options= {
        httpsOnly:true,
        secure:true
    }

    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json("User logged out")
}

export {registerUser, loginUser, logoutUser};