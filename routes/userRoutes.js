import { Router } from "express";
import User from "../Models/User.js";
const userRoutes=Router()

userRoutes.get("/",(req, res)=>{
    res.send("gel all users")
})


export default userRoutes

