import { Router } from "express";
import userRoutes from "./userRoutes.js";
const router = Router();


router.use(userRoutes)




export default router