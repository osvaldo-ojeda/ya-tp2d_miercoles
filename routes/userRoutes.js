import { Router } from "express";
const userRoutes = Router();
import UserController from "../Controllers/UserController.js";
import validateAccess from "../middleware/validateAccess.js";

const userController = new UserController();

userRoutes.post("/login", userController.login);
userRoutes.post("/", userController.createUser);

userRoutes.get("/me", validateAccess, userController.me);

userRoutes.use(validateAccess);
userRoutes.get("/:id", userController.getUserById);
userRoutes.post("/logout", userController.logout);



userRoutes.get("/", userController.getAllUsers);
userRoutes.put("/:id", (req, res) => {
  res.send("update all users");
});
userRoutes.delete("/:id", (req, res) => {
  res.send("delete all users");
});

export default userRoutes;
