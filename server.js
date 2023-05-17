//importamos express
import express  from "express"

//ejecutamos express
const app=express()

//importamos otros archivos
import router from "./rutes/router.js"

//midlewares
app.use("/api",router)


//ponemos a escuchar al servidor
app.listen(8080,()=>{
    console.log("server ok http://localhost:8080")
})
