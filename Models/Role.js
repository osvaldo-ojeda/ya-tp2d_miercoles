import { DataTypes as DT } from "sequelize";
import connection from "../connection/connection.js";

const Role = connection.define(
  "Role",
  {
    role: {
      type: DT.STRING(),
    },
  },
  {
    timestamps: false,
  }
);

export default Role;
