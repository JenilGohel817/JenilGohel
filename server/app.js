import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
const PORT = process.env.PORT || 8080;
const app = express();

dotenv.config({
  path: "./private/.env",
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`Server Started !`);
});

export default app;
