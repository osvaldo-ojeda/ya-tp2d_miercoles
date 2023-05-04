import fs from "fs";
// console.log("🚀 ------------------------------🚀")
// console.log("🚀 ~ file: index.js:2 ~ fs:", fs)
// console.log("🚀 ------------------------------🚀")

// const read = () => {
//   return fs.promises
//     .readFile("./package.json", "utf-8")
//     .then((data) => console.log(data));
// };
// console.log(read());

const read = () => {
  return fs.promises.readFile("./package.json", "utf-8");
};

// read()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));
// -----------------

const readAsync = async () => {
  try {
    const data = await fs.promises.readFile("./package.json", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

// console.log(readAsync());
// readAsync();

const appendAsync = async(archivo, data) => {
  try {
    if (!archivo) throw new Error("sin nombre de archivo");
    if (!data) throw new Error("sin data");
    await fs.promises.appendFile(`./${archivo}.txt`, `${data}\n`);
  } catch (error) {
    console.log(error.message);
  }
};

 appendAsync("archivo", "dataaaa")
