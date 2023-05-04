const fs = require("fs");

const read = () => {
  fs.readFile("./package.json", "utf-8", (error, data) => {
    if (error) {
      return error.message;
    } else {
      console.log(data);
      return data;
    }
  });
  return "hola"
};

console.log(read());
