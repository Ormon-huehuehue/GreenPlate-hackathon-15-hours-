import {Router} from "express"
const router = Router();


import { test } from "../Controllers/user.controller.js";
import { verifyJWT } from "../Middlewares/auth.middleware.js";


//middlewares
 


router.route("/test").get(test)





export default router;


