import { Router } from "express";
const productRoutes = Router();

productRoutes.get("/", (req, res) => {
  res.send("get all products");
 
});
productRoutes.get("/:id", (req, res) => {
  res.send("get product by id");
});
productRoutes.post("/", (req, res) => {
  res.send("post/ create product");
});
productRoutes.put("/:id", (req, res) => {
  res.send("put/update product by id");
});
productRoutes.delete("/:id", (req, res) => {
  res.send("delete product by id");
});

export default productRoutes;
