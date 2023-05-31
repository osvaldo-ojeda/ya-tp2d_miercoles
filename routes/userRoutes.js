import { Router } from "express";
const userRoutes=Router()

userRoutes.get("/",(req, res)=>{
    res.send("gel all users")
})


export default userRoutes

