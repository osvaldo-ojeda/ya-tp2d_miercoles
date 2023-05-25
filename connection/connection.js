import mysql2 from "mysql2";

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  database: "miercoles",
  password: "",
  port: 3306,
});

connection.connect((error) => {
  if (error) throw error.message;
  console.log("connection db ok");
});

export default connection