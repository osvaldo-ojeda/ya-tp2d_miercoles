import { Router } from "express";
import userRoutes from "./userRoutes.js";
const indexRoutes = Router();

indexRoutes.use("/users", userRoutes);

export default indexRoutes;
