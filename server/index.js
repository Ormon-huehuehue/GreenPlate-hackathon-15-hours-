import app from "./app.js"
import connectDB from "./db/index.js";


import dotenv from "dotenv";
dotenv.config({path: './.env'});


const port = process.env.PORT || 3000;


connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`)
    })
}).catch((error)=>{
    console.log("Error connecting to mongoDB",error)
})
