import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser"
const app = express();

app.use(cors({
    credentials:true,
    origin:`${process.env.CORS_ORIGIN}`
}));


app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(cookieParser())



//importing routes

import userRouter from './Routes/user.routes.js'

//routes declaration

app.use('/user',userRouter)

export default app;

