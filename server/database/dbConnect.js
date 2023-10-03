import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config({
  path: "./private/.env",
});

const dbConnect = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 1,
  queueLimit: 0,
});

export default dbConnect;
