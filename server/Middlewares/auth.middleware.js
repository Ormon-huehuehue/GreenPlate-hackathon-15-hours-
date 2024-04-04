import jwt from 'jsonwebtoken'
import { User } from '../Models/user.model'

export const verifyJWT = async(req,res,next)=>{
    try{
        const token = req.cookies?.accessToken;
        const decodedToken = jwt.verify(token,process.env.accessToken)

        const user= await User.findById(decodedToken._id).select("-password -refreshToken")

        if(!user){
            res.status(400).json({
                message:"Invalid access token"
            })
        }
        //adding a new property named 'user' to the 'req' object for using later within route handlers and middlewares to access the authenticated user 
        req.user = user;
        next();
    }
    catch{
        throw new Error("Something went wrong during the verification process,")
    }
}