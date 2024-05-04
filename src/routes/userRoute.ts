import express from "express";
import userControl from "../controller/userControl";

const router = express.Router();
// router.post("/register", userControl.register);
router.post("/login", userControl.login);

export default router;
