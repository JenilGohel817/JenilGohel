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
  connectionLimit: 10,
});

dbConnect.connect(function (err) {
  if (err) {
    console.log(`connectionRequest Failed ${err.stack}`);
  } else {
    console.log(`DB connectionRequest Successful ${dbConnect.threadId}`);
  }
});

dbConnect.on("error", (err) => {
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.error("Database connection was closed. Reconnecting...");
    dbConnect.connect();
  } else {
    throw err;
  }
});

export default dbConnect;
