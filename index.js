const { saludar, chau } = require("./functions/saludar");
const reducir= require("./functions/reducir")
const cosas = require("./utils/cosas");



// copias superficiales
const nombres = ["Juan", "Pablo", "Marina", ["Pepe", "pepo", "pipa"]];
// const copiaNombres= nombres

// copiaNombres[0]="Juanito"
// console.log("🚀 ------------------------------------------------🚀")
// console.log("🚀 copiaNombre:", copiaNombres)
// console.log("🚀 nombres:", nombres)
// console.log("🚀 ------------------------------------------------🚀")

// esto es para Array
const copiaSlice = nombres.slice(0, 2);
copiaSlice[0] = "Pepe";

// estos son para array y obj
const copisSpreadObj = { ...nombres, ...copiaSlice };
const copisSpreadArr = [...nombres, ...copiaSlice];

const copiaObjetassign = Object.assign([], nombres);
copiaObjetassign[3][1] = "Pepo";
// console.log("🚀 -----------------------------------------------🚀");
// console.log("🚀 nombres:", nombres);
// console.log("🚀 copiaSlice:", copiaSlice);
// console.log("🚀 copisSpreadObj:", copisSpreadObj);
// console.log("🚀 copisSpreadArr:", copisSpreadArr);
// console.log("🚀 copiaObjetassign:", copiaObjetassign);
// console.log("🚀 -----------------------------------------------🚀");

// Copias profundas

const JSONstringify = JSON.stringify(nombres);
const copiaJson = JSON.parse(JSONstringify);
copiaJson[3][2] = "Pipa";

const copiaStructured = structuredClone(nombres);
// console.log("🚀 ---------------------------------------------🚀");
// console.log("🚀  nombres:", nombres);
// console.log("🚀  JSONstringify:", JSONstringify);
// console.log("🚀  copiaJson:", copiaJson);
// console.log("🚀  copiaStructured:", copiaStructured);
// console.log("🚀 ---------------------------------------------🚀");

// saludar()
//  chau()
// console.log(module)

// const data={
//   nombre:"Osvaldito",
//   curso:"node"
// }

// let nombre="curso"
// let element="obj"

// data.apellido="Ojeda"
// data.element=[]
// data[element]={}

// console.log(data)
// console.log(data.nombre)
// console.log(data["nombre"])
// console.log(data[nombre])

console.log(reducir(cosas));


