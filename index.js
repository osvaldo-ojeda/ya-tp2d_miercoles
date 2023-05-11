import express from "express";
const app = express();


//importaciones 
import router from "./routes/index.js"

//midlewares
app.use(router)



app.listen(8080, () => {
  console.log("servidor ok http://localhost:8080/");
});
