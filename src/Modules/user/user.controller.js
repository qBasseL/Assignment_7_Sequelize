import { Router } from "express";
import { signup, login } from "./user.service.js";
const router = Router();

router.post("/sign-up", async (req, res, next) => {
  const result = await signup(req.body);
  return res.status(201).json({ Message: "Done Signup", result });
});

router.post("/login", async (req, res, next) => {
  const result = await login(req.body);
  return res.status(200).json({ Message: "Login Successful", result });
});


export default router