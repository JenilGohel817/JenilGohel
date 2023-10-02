import express from "express";
import dotenv from "dotenv";
const PORT = process.env.PORT || 8080;
const app = express();

dotenv.config({
  path: "./private/.env",
});

app.listen(PORT, () => {
  console.log(`Server Started !`);
});
