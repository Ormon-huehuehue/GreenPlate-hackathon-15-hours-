import mongoose,{Schema} from "mongoose"

const subscriptionSchema = new Schema({
    title:{
        type:String,
        required:true,
        index:true
    },
    description:{
        type:String
    },
    owner:[{
        type:Schema.Types.ObjectId,
        ref:"User"
    }]

},{timestamps:true})


export const Subscription = mongoose.model("Subscription",subscriptionSchema)