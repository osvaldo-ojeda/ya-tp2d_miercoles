import express from "express";
const app = express();

import router from "./routes/index.js";
// import connection from "./connection/connection.js";

//midleware de aplicacion
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//midleware de rutas
app.use(router);

app.listen(8080, () => {
  console.log("server ok http://localhost:8080");
});
