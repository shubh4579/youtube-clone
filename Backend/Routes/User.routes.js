import express from "express";
import User from "../Models/User.model.js";
import { logout, signIn, signUp } from "../Controllers/User.controller.js";

const router = express.Router();

router.post("/signUp", signUp);
router.post("/login", signIn);
router.post("/logout", logout);

export default router;
