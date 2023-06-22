import express from "express";
const app = express();
import { serverPort } from "./config/config.js";
import indexRoutes from "./routes/indexRoutes.js";
import connection from "./connection/connection.js";
import roleSeed from "./seed/roleSeed.js";
import cookieParser from "cookie-parser";

//midlewares

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(indexRoutes);

app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .send({ success: false, message: error.message });
});



await connection
  .sync({ force: false })
  .then(() => {
    app.listen(serverPort, () => {
      console.log("server ok http://localhost:8888");
    });
  })
  .then(roleSeed);
