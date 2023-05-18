import { Router } from "express";
const userRoutes = Router();
import saludar from "../midlewares/saludar.js" 

userRoutes.get("/", (req, res) => {
  res.send("get all users");
});
userRoutes.get("/:id", (req, res) => {
  res.send("get user by id");
});
userRoutes.post("/",saludar, (req, res) => {
  res.send("post/create user");
});
userRoutes.put("/:id", (req, res) => {
  res.send("put/update user by id");
});
userRoutes.delete("/:id", (req, res) => {
  res.send("delete user by id");
});

export default userRoutes;
