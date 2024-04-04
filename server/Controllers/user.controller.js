import {User} from "../Models/user.model.js"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"

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

        const userExists = await User.findOne({email})
        try {
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

const loginUser = ()=>{

}
const logoutUser = ()=>{

}
export {registerUser, loginUser, logoutUser};