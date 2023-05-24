import { Router } from "express";

const produtsRoutes = Router();

produtsRoutes.get("/", (req, res) => {
  res.send("get all products");
});
produtsRoutes.get("/:id", (req, res) => {
  res.send("get product by id");
});
produtsRoutes.post("/", (req, res) => {
  res.send("create produduct");
});
produtsRoutes.put("/:id", (req, res) => {
  res.send("update product by id");
});
produtsRoutes.delete("/:id", (req, res) => {
  res.send("delete product by id");
});

export default produtsRoutes;
