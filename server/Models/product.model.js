import mongoose,{Schema} from "mongoose"

const productSchema = new Schema({
    title:{
        type:String,
        required:true,
        index:true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})





export const Product = mongoose.model("Product",productSchema)