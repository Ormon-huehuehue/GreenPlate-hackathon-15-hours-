import mongoose,{Schema} from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        index:true
    },
    isBusiness:{
        type:Boolean,
        default:false
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    refreshToken:{
        type:String
    },
    products:[{
        type:Schema.Types.ObjectId,
        ref:"Product"
    }]
},{timestamps:true})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password= await bcrypt.hash(this.password,10);
    next();
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function(){
    const token = jwt.sign(
     {
         _id:this._id,
         email:this.email,
     },
 
     process.env.ACCESS_TOKEN_SECRET
 )
  return token; 
 }
 
 userSchema.methods.generateRefreshToken = function(){
     const refreshToken = jwt.sign(
     {
         _id:this._id
     },
 
     process.env.REFRESH_TOKEN_SECRET
 
     )
 return refreshToken
 
 }
export const User = mongoose.model("User",userSchema);