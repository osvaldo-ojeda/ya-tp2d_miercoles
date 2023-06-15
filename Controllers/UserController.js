import { User, Role } from "../Models/index.js";

class UserController {
  constructor() {}
  createUser = async (req, res, next) => {
    try {
      const { nombre, apellido, telefono, email, password, roleId } = req.body;
      const result = await User.create({
        nombre,
        apellido,
        telefono,
        email,
        password,
        roleId,
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
      const result = await User.findAll({
        attributes: ["id", "nombre", "apellido", "email", "roleId"],
        // include:Role
        include: [
          {
            model: Role,
            attributes: ["role"],
            as: "role",
          },
        ],
      });
      if (result.length === 0) {
        const error = new Error("no hay usuarios");
        error.status = 400;
        throw error;
      }
      res
        .status(200)
        .send({ success: true, message: "Usuarios encontrados", result });
    } catch (error) {
      //   res.status(400).send({ success: false, message: error.message });
      next(error);
    }
  };
  getUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await User.findOne({
        where: {
          id,
        },
        attributes: ["id", "nombre", "apellido", "email"],
      });
      if (!result) throw new Error("no se encontro al usuario");
      res
        .status(200)
        .send({ success: true, message: "usuario encontrado", result });
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
  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const result = await User.findOne({
        where: {
          email,
        },
      });
      if (!result) throw new Error("Credeciales malas");
      const hash = await result.validatePassword(password);

      if (!hash) throw new Error("Credeciales malas");

      res
        .status(200)
        .send({ success: true, message: "Usuario logueado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default UserController;
