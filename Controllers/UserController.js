import User from "../Models/User.js";

class UserController {
  constructor() {
    
  }
  createUser = async (req, res, next) => {
    try {
      const { nombre, apellido, telefono, email, password } = req.body;
      const result = await User.create({
        nombre,
        apellido,
        telefono,
        email,
        password,
      });
      if (!result) throw new Error("no se pudo crear el usuario");
      res
        .status(200)
        .send({ success: true, message: "usuario crado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getAllUsers = async (req, res, next) => {
    try {
      const result = await User.findAll();
      if (result.length === 0) throw new Error("no hay usuarios");
      res
        .status(200)
        .send({ success: true, message: "Usuarios encontrados", result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  getUserById = async (req, res, next) => {
    try {
      const result = await User;
      res.status(200).send({ success: true, message: "" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  putUserById = async (req, res, next) => {
    try {
      const result = await User;
      res.status(200).send({ success: true, message: "" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  deleteUserById = async (req, res, next) => {
    try {
      const result = await User;
      res.status(200).send({ success: true, message: "" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default UserController;
