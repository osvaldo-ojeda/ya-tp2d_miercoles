const fs = require("fs");

console.log("Inicio del programa");
const read = () => {
  try {
    return fs.readFileSync("./package.json", "utf-8");
  } catch (error) {
    return error.message;
  }
};
// console.log(read());

const write = () => {
  try {
    fs.writeFileSync("./notas.txt", "nombre: Osvaldito");
    return "Archivo creado";
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

// console.log(write())

const append = () => {
  try {
    fs.appendFileSync("./notas.txt", `nombre: Javier\n`);
    return "Archivo modificado";
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

//  console.log(append())

const writeFecha = (nobreDelArchivo) => {
  try {
    const date= new Date().toLocaleString()
    // fs.writeFileSync(nobreDelArchivo + ".txt");
    fs.writeFileSync(`${nobreDelArchivo}.txt`, `${date}`);
    return "Archivo con fecha creado";
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
// console.log(writeFecha("fecha"))

const readFecha = (nobreDelArchivo) => {
  try {
    // if (!nobreDelArchivo) throw "Ruta undefined"
    return fs.readFileSync(`${nobreDelArchivo}.txt`,"utf-8")
  } catch (error) {
    return `Error: ${error}`;
  }


}

console.log(readFecha())
console.log("Fin del programa");

// const date= Date()
// const date= new Date().toLocaleString()
// console.log("🚀 -----------------------------------🚀")
// console.log("🚀 ~ file: index.js:49 ~ date:", date)
// console.log("🚀 -----------------------------------🚀")
