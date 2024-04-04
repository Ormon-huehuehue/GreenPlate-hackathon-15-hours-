import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"


const connectDB = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`MongoDB connected to ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("mongoDB connection failed \n",error)
        process.exit(1)
    }
}

export default connectDB;