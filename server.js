import express from "express";
const app = express();

import router from "./routes/index.js";



app.use(router)




app.listen(8080, ()=>{
    console.log("server ok http://localhost:8080")
})
