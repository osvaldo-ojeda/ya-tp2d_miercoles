import { Sequelize } from "sequelize";
import {
  database,
  username,
  password,
  host,
  dialect,
  port,
} from "../config/config.js";

// const database = process.env.DB_NAME;
// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;
// const host = process.env.DB_HOST;
// const dialect = process.env.DB_DIALECT;
// const port = process.env.DB_PORT;

// const connection = new Sequelize(database, username, password, {
//   host,
//   dialect,
//   port,
// });

const connection = new Sequelize(database, username, password, {
  host,
  dialect,
  port,
});

try {
  await connection.authenticate();
  console.log("Connection a db ok.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default connection;
