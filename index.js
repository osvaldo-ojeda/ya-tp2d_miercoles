const nombres = ["David", "Carlos", "Roman", "Erika"];

// console.log("🚀 ----------------------------------------🚀");
// console.log("🚀 ~ file: index.js:2 ~ nombres:", typeof nombres);
// console.log("🚀 ~ file: index.js:2 ~ nombres:", nombres[0]);
// console.log("🚀 ~ file: index.js:2 ~ nombres:", nombres[1]);
// console.log("🚀 ~ file: index.js:2 ~ nombres:", nombres[6]);
// console.log("🚀 ----------------------------------------🚀");

// agregar elementos a un array

nombres[4] = "Beto";
// nombres[7] = "Beto";
// se evita estas cosas
// nombres.nombre="Enzo"
// nombres[-2] = "Osvaldito";
nombres[6] = "Sofia";
// console.log("🚀 ~ file: index.js:2 ~ nombres:", nombres);
// console.log("🚀 ~ file: index.js:2 ~ nombres:", nombres[7]);

// ----------------------

// agregar con push
const numeros = [1, 2, 3, 4, 5];
// console.log("🚀 ~ file: index.js:25 ~ numeros:", numeros)
// numeros.push(6)
// numeros.push(7)
// console.log("🚀 push:", numeros)

// agregar al pricipio
numeros.unshift(0);
// console.log("🚀 unshift:", numeros)
// numeros[1]="uno"
// console.log("🚀 unshift:", numeros)

// quitar elementos de un array al final
let ultimo = numeros.pop();
// console.log("🚀 unshift:", numeros)
// console.log("🚀 ultimo:", ultimo)

// quitar elementos de un array al inicio

let primero = numeros.shift();
// console.log("🚀 unshift:", numeros)
// console.log("🚀 primero:", primero)

// -------------------
// copia de un array

let nombre1 = "Lucas";
let nombre2 = nombre1;
// console.log("🚀 nombre1:", nombre1);
// console.log("🚀 nombre2:", nombre2);
// nombre2 = "Pepe";
// console.log("🚀 nombre1:", nombre1);
// console.log("🚀 nombre2:", nombre2);

const productos = ["fideos", "sal", "cerveza", "salsa", "queso"];
const lista = productos;

// console.log("🚀 productos:", productos);
// console.log("🚀 lista:", lista);

// lista.push("helado");
// productos.push("aceite")
// console.log("🚀 productos:", productos);
// console.log("🚀 lista:", lista);

// copia dura
const lista2 = [
  productos[0],
  productos[1],
  productos[2],
  productos[3],
  productos[4],
  productos[5],
];
// productos[0]="manteca"
// lista2.unshift("cafe")
// console.log("🚀 productos:", productos);
// console.log("🚀 lista2:", lista2);

// ---------------
// bucles
const productos2 = [
  "fideos",
  "sal",
  "cerveza",
  "salsa",
  "queso",
  ["detergente", "papel"],
];
console.log("🚀 largo del array:", productos2.length);
// for
// console.time("for");
let copiaConFor = [];
for (let index = 0; index < productos2.length; index++) {
  const element = productos2[index];
  console.log("🚀 element:", element);
  copiaConFor.push(element);
}
copiaConFor[5][1]="cif"
console.log("🚀 copiaConFor:", copiaConFor);
console.log("🚀 productos2:", productos2);
// console.timeEnd("for");

// foreach
// console.time("forEach");
const copiaConForeach = [];
productos2.forEach((element) => {
  copiaConForeach.push(element);
});
// console.log("🚀 copiaConForeach:", copiaConForeach);
// console.timeEnd("forEach");

// copia con slice
const copiaSlice=productos2.slice()
copiaSlice[0]="arroz"
copiaSlice[5].push("papel")

console.log("🚀 copiaSlice:", copiaSlice)
console.log("🚀 productos2:", productos2)

const copiaSlice2=productos2.slice(1,5)
console.log("🚀 copiaSlice2:", copiaSlice2)
console.log("🚀 productos2:", productos2)

// spread operators
const copiaSpread=[...productos2]
console.log("🚀 copiaSpread:", copiaSpread)
console.log("🚀 productos2:", productos2)


