import http from "http";

const server = http.createServer((peticion, respuesta) => {
  // const url = peticion.url;
  // -------------------------------
  // const { url } = peticion;
  // const {method}=peticion
  // -------------------------------
  const { url, method } = peticion;
  // console.log("🚀url:", url);
  // console.log("method:", method);
  if (url === "/") {
    respuesta.writeHead(200);
    respuesta.end(JSON.stringify("hola a nuestra pagina"));
  } else if (url === "/nosotros") {
    respuesta.writeHead(200);
    respuesta.end(JSON.stringify("hola a nosotros"));
  } else {
    respuesta.writeHead(400);
    respuesta.end("Not Found");
  }

  // respuesta.end(JSON.stringify({ nombre: "Ricky Martin" }));
});

server.listen(8080, () => {
  console.log(`prueto ok http://localhost:8080/`);
});

// const nombre = "osval";
// const obj = {
//   name:nombre,
// };
// // console.log(obj.name);
// const {name}=obj
// console.log(name);
