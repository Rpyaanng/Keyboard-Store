import express from "express";
const router = express.Router();

import { register, login, updateUser } from "../controllers/authController.js";

router.route("/register").post(register);
router.route("/login").post(login);

import authenticateUser from "../middleware/auth.js";
router.route("/updateUser").patch(authenticateUser, updateUser);

export default router;
