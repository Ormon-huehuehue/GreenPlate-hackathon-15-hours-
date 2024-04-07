import {Router} from "express"
const router = Router();

import {registerUser,
loginUser,
logoutUser,
addProduct,
addToCart,
listAvailableProducts
} from "../Controllers/user.controller.js"


//middlewares
import { verifyJWT } from "../Middlewares/auth.middleware.js";

 


router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

router.route('/logout').post(verifyJWT, logoutUser);

router.route('/addProduct').post(verifyJWT, addProduct)

router.route('/addToCart/:title').post(verifyJWT, addToCart)

router.route("/listProducts").get(listAvailableProducts)






export default router;


