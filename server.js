import express from "express";
const app = express();
import { serverPort } from "./config/config.js";
import indexRoutes from "./routes/indexRoutes.js";
import connection from "./connection/connection.js";


//midlewares
app.use(indexRoutes);

await connection.sync({ force: true }).then(() => {
  app.listen(serverPort, () => {
    console.log("server ok http://localhost:8080");
  });
});
