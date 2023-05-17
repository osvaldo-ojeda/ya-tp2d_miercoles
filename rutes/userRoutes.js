import { Router } from "express";
const userRoutes = Router();

userRoutes.get("/users", (req, res) => {
  res.send("get all users");
});
userRoutes.get("/users/:id", (req, res) => {
  res.send("get user by id");
});
userRoutes.post("/users", (req, res) => {
  res.send("post/create user");
});
userRoutes.put("/users/:id", (req, res) => {
  res.send("put/update user by id");
});
userRoutes.delete("/users/:id", (req, res) => {
  res.send("delete user by id");
});

export default userRoutes;
