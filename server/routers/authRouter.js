import express from "express";
import { authLogin, authRegister } from "../controllers/authController.js";
import passport from "passport";
const router = express.Router();

router.post("/register", authRegister);

router.post("/login", authLogin);

router.get("/login/google", passport.authenticate("google"));

export default router;
