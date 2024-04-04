import express from "express"
import cors from "cors";
const app = express();

app.use(cors({
    credentials:true,
    origin:`${CORS_ORIGIN}`
}));

//importing routes

import userRouter from './Routes/user.routes.js'

//routes declaration

app.use('/user',userRouter)

export default app;

