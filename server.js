//importamos express
import express from "express";

//ejecutamos express
const app = express();

//importamos otros archivos
import router from "./rutes/router.js";
import methodLoger from "./midlewares/methodLoger.js";
import morgan from "morgan";


// const saludar = (req, res, next) => {
//   console.log("hola");
// };

//midlewares
// app.use((req, res, next) => {
//   console.log("hola");
//   next()
// });
// app.use(saludar)
// app.use("/api", saludar, router);

app.use(methodLoger)
// app.use(morgan('combined'))
app.use(morgan('tiny'))
app.use("/api", router);

//ponemos a escuchar al servidor
app.listen(8080, () => {
  console.log("server ok http://localhost:8080");
});
