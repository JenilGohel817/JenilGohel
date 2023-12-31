import express from "express";
import { authLogin, authRegister } from "../controllers/authController.js";
import authenticateRole from "../middleware/errorHandler.js";
const router = express.Router();

router.post("/register", authRegister);

router.post("/login", authLogin);

export default router;
