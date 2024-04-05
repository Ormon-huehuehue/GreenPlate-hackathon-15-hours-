import {Router} from "express"
const router = Router();




//middlewares
import { verifyJWT } from "../Middlewares/auth.middleware.js";


 
router.route('/newProduct').post(newProduct)

router.route('/addItem').post(registerUser)

router.route('/login').post(loginUser)

router.route('/logout').post(verifyJWT, logoutUser);





export default router;


