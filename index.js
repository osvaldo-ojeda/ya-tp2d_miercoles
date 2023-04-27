function uno() {
  console.log("console.log uno");
  return "return uno"
}
function dos() {
  setTimeout(() => {
    console.log("console.log dos");
  }, 1000);
  return "return dos"
}
function tres(param) {
  return new Promise((resolve, reject) => {
    if (param) {
      resolve(`Promesa tres cumplida, se paso el parametro ${param}`);
    } else {
      reject("promesa tres no cumplida, no hay parametros");
    }
  });
}
function cuatro() {
  console.log("cuatro");
}

console.log("inicio");
console.log(uno())
console.log(dos())
const esperandoTres=tres()
  .then((data) =>console.log(data))
  .catch((err) => console.log(err))
  .finally(()=>console.log("Fin de la promesa"))
  console.log(esperandoTres)
cuatro();
console.log("fin");
