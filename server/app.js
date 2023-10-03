import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import dbConnect from "./database/dbConnect.js";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import router from "./routers/contactRouter.js";
const PORT = process.env.PORT || 8080;
const app = express();

dotenv.config({
  path: "./private/.env",
});

dbConnect.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("SQL Connect!");
  }
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server Started !`);
});

export default app;
