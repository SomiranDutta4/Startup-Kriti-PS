import express from "express"
import { addToCart,removeFromCart,getCart ,removeCart} from "../controllers/cartController.js"
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add",addToCart)
cartRouter.post("/remove",removeFromCart)
cartRouter.post("/get",getCart)
cartRouter.post('/removeAll',removeCart)

export default cartRouter;