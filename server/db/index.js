import mongoose from 'mongoose'
import {DB_NAME} from "../constants"


const connectDB = async ()=>{
    try{
        connectionInstance = await mongoose.connnect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`MongoDB connected to ${connectionInstance.connection.host}`)
    }
    catch{
        console.log("mongoDB connection failed")
        process.exit(1)
    }
}

export default connectDB;