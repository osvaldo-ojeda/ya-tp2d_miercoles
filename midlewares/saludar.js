const saludar = (req, res, next) => {
  console.log("hola");
  next()
};


export default saludar