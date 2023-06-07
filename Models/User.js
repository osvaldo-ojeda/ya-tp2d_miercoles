import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";

class User extends Model {}

User.init(
  {
    nombre: {
      type: DT.STRING,
      allowNull: false,
      validate:{
        len:[2,20]
      }
    },
    apellido: {
      type: DT.STRING,
      allowNull: false,
    },
    telefono: {
      type: DT.STRING(15),
      allowNull: false,
    },
    email: {
      type: DT.STRING(),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DT.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

export default User;
