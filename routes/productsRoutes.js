import { Router } from "express";
import connection from "../connection/connection.js";
import { error } from "console";

const produtsRoutes = Router();

produtsRoutes.get("/", (req, res) => {
  const sql =
    "SELECT name, description, price, stock, category, image FROM product";

  connection.query(sql, (error, result, fields) => {
    if (error) throw error;

    res.send({ message: "get all products ok", result });
  });


});
produtsRoutes.get("/:id", (req, res) => {
  res.send("get product by id");
});
produtsRoutes.post("/", (req, res) => {
  const { name, description, price, stock, category, image } = req.body;
  const sql = `INSERT INTO product(name, description, price, stock, category, image) VALUES("${name}","${description}","${price}","${stock}","${category}","${image}")`;

  connection.query(sql, (error, result, fields) => {
    console.log("🚀 result:", result);
    if (error) throw error;

    res.send("create produduct");
  });
});
produtsRoutes.put("/:id", (req, res) => {
  res.send("update product by id");
});
produtsRoutes.delete("/:id", (req, res) => {
  res.send("delete product by id");
});

export default produtsRoutes;
