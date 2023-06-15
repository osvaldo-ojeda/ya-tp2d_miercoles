import { Router } from "express";
const userRoutes = Router();
import UserController from "../Controllers/UserController.js";

const userController = new UserController();

userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/:id", userController.getUserById);
userRoutes.post("/", userController.createUser);
userRoutes.post("/login", userController.login);
userRoutes.put("/:id", (req, res) => {
  res.send("gel all users");
});
userRoutes.delete("/:id", (req, res) => {
  res.send("gel all users");
});

export default userRoutes;
