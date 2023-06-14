import { Role } from "../Models/index.js";

const roleSeed = async () => {
  try {
    await Role.bulkCreate([
      {
        role: "admin",
      },
      {
        role: "user",
      },
    ]);
  } catch (error) {
    console.log(error.message);
  }
};

export default roleSeed;
