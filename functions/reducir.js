
// Reducir Ejercicio: resumir las instancias de cada uno de estos en un solo objeto
// Ejemplo:
// var mascotas = ['perro', 'gato', 'perro'];
// Resultado: { 'perro': 2, 'gato': 1 }

// function reducir(array) {
//   const obj = {};

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     // if (obj[element]) {
//     //   // obj[element]=obj[element]+1
//     //   // obj[element]+=1
//     //   obj[element]++
//     // } else {
//     //   obj[element]=1
//     // }
//     // // ----------
//     // if (obj[element]) obj[element]++;
//     // if (!obj[element])obj[element] = 1;
//     // // ----------
//     // obj[element] ? obj[element]++ : (obj[element] = 1);
//     // ----------
//     obj[element]++ || (obj[element] = 1);
//   }

//   return obj;
// }

function reducir(array) {
    const obj = array.reduce((acumulador, element) => {
      acumulador[element] ? acumulador[element]++ : (acumulador[element] = 1);
      // acumulador[element]++ || (acumulador[element] = 1);
      return acumulador;
    }, {});
    return obj;
  }
  
  module.exports= reducir