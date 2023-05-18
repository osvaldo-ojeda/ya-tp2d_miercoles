import { Router } from "express";
import userRoutes from "./userRoutes.js";
import productRoutes from "./productRoutes.js";

const router = Router();


router.use("/user",userRoutes)
router.use("/product", productRoutes)




export default router