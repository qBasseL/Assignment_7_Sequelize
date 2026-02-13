import { Router } from "express";
import { signup, login, updateProfile, searchByEmail, getUser } from "./user.service.js";
const router = Router();

router.post("/sign-up", async (req, res, next) => {
  const result = await signup(req.body);
  return res.status(201).json({ Message: "Done Signup", result });
});

router.post("/login", async (req, res, next) => {
  const result = await login(req.body);
  return res.status(200).json({ Message: "Login Successful", result });
});

router.patch("/:userId", async (req, res, next) => {
  const result = await updateProfile(req.params.userId, req.body);
  return res.status(200).json({ Message: "Update Completed", result });
});

router.get("/", async (req, res, next) => {
  const result = await searchByEmail(req.query.email);
  return res.status(200).json({ Message: "Done", result });
});

router.get("/:userId", async (req, res, next) => {
  const result = await getUser(req.params.userId);
  return res.status(200).json({ Message: "Correct User", result });
});

export default router;
