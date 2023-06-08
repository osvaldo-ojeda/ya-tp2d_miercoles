import Role from "./Role.js";
import User from "./User.js";

Role.hasMany(User, {
  foreignKey: "roleId",
});
User.belongsTo(Role, {
  foreignKey: "roleId",
});

export { User, Role };
