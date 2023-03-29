// Variables
// var
// // console.log("🚀 ~ file: index.js:3 ~ nombre:", nombre);
var nombre;
// // console.log("🚀 ~ file: index.js:3 ~ nombre:", nombre);
nombre = "osvaldo";
var nombre = "Juan";
// // console.log("🚀 ~ file: index.js:3 ~ nombre:", nombre);
// // console.log("🚀 ~ file: index.js:6 ~ apellido:", apellido);
var apellido = "ojeda";
// // console.log("🚀 ~ file: index.js:6 ~ apellido:", apellido);

// // console.log("🚀 ~ file: index.js:14 ~ altura:", altura)
// altura=1.98// nuncaaaaaaaaaaaaaa

// let
let edad;
// let edad = 83;//no se puede redeclarar con let
// // console.log("🚀 ~ file: index.js:10 ~ edad:", edad);
edad = 36;
// // console.log("🚀 ~ file: index.js:16 ~ edad:", edad);
// const
const pi = 3.14;
// // console.log("🚀 ~ file: index.js:13 ~ pi:", pi);
// pi=1
// // console.log("🚀 ~ file: index.js:21 ~ pi:", pi)

// datos en js
// primitivos
// 1 String
let string = "hola equipo";
// // console.log("🚀 ~ file: index.js:32 ~ string:", typeof string);

// 2 Number
let number = 2;
// // console.log("🚀 ~ file: index.js:36 ~ number:", typeof number);

// 3 BigInt
let bigint = 12312e4;
// // console.log("🚀 ~ file: index.js:40 ~ bigint:", typeof bigint);

// 4 Boolean
let boolean = "true"; // false
// // console.log("🚀 ~ file: index.js:44 ~ boolean:", typeof boolean);

// 5 undefined
let undefined;
// // console.log("🚀 ~ file: index.js:48 ~ undefined:", typeof undefined);

// 6 null
let nulo = null;
// // console.log("🚀 ~ file: index.js:52 ~ nulo:", typeof nulo);

// 7 Symbol

// datos complejos

// 8 Array
// let aray=new Array()
const array = ["str", 34, [], {}];
// // console.log("🚀 ~ file: index.js:61 ~ array:", typeof array);
// // console.log("🚀 ~ file: index.js:61 ~ array:", array[1]);
// array[1] = 54;
// // console.log("🚀 ~ file: index.js:64 ~ array:", array);

// 9 Object
const obj = {
  key: "value",
  nombre: "Osvaldito",
  edad: 36,
  mascotas: ["kuka", "canela"],
};
let mascotas = "mascotas";
// // console.log("🚀 ~ file: index.js:73 ~ obj:", typeof obj);
// // console.log("🚀 ~ file: index.js:73 ~ obj:", obj);
// // console.log("🚀 ~ file: index.js:73 ~ obj:", obj.nombre);
// // console.log("🚀 ~ file: index.js:73 ~ obj:", obj["edad"]);
// // console.log("🚀 ~ file: index.js:73 ~ obj:", obj[mascotas]);

// 10 Date
const fecha = new Date();
// // console.log("🚀 ~ file: index.js:82 ~ fecha:", typeof fecha);
// // console.log("🚀 ~ file: index.js:82 ~ fecha:", fecha);

// 11 function

function saludar(name) {
  console.log("Hola ", name);
  console.log("Hola " + name);
  console.log(`Hola ${name}`);
}
let saludo = saludar("Julian");
// console.log("🚀 ~ file: index.js:93 ~ saludo:", saludo);
// saludar("Carlos")
// // console.log("🚀 ~ file: index.js:88 ~ saludar ~ saludar:", saludar)
// // console.log("🚀 ~ file: index.js:88 ~ saludar ~ saludar:", saludar())
// // console.log("🚀 ~ file: index.js:88 ~ saludar ~ saludar:", typeof saludar)

let numero = 0;

function add() {
  //   numero = numero + 1;
  //   numero += 1;
  numero++;
}
// add();
// add();
// add();
// console.log("🚀 ~ file: index.js:98 ~ numero:", numero);

console.log("🚀 ~ file: index.js:110 ~ suma ~ suma:", suma(3, 4));
function suma(n1, n2) {
  return n1 + n2;
}
let resultado = suma(7, 4);
// console.log("🚀 ~ file: index.js:113 ~ resultado:", resultado);
// console.log("🚀 ~ file: index.js:110 ~ suma ~ suma:", suma(2, 4));

// funcion anonima
const restar = function (n1, n2) {
  return n1 - n2;
};

// restar(2,4)
// console.log("🚀 ~ file: index.js:123 ~ restar:", restar(2,4))

// funcion flecha

console.log("🚀 ~ file: index.js:129 ~ dividir:", dividir(4,2))
var dividir = (n1, n2) => n1 / n2;

const multiplicar = (n1, n2) => {
  return n1 * n2;
};
// console.log("🚀 ~ file: index.js:132 ~ multiplicar ~ multiplicar:", multiplicar(6,8))
