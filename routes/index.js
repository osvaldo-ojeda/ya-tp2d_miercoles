import { Router } from "express";
const router = Router();
import produtsRoutes from "./productsRoutes.js";

router.use("/products",produtsRoutes);

export default router;
