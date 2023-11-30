import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import contactRouter from "./routers/contactRouter.js";
import projectRouter from "./routers/projectRouter.js";
import authRouter from "./routers/authRouter.js";
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use("/api/v1/contact", contactRouter);
app.use("/api/v1/project", projectRouter);
app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server Started !`);
});

export default app;
