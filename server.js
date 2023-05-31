import express from "express";
// import 'dotenv/config'
import config from "./config/config.js";
import indexRoutes from "./routes/indexRoutes.js";
import connection from "./connection/connection.js";
const app = express();

const port = config.serverPort;

//midlewares
app.use(indexRoutes);
app.listen(port, () => {
  console.log("server ok http://localhost:8080");
});
