import express from "express";
import { PORT } from "../config/config.service.js";
import { authenticateDB } from "./DB/db.connection.js";
import "./DB/Models/index.js";
import { userRouter, postRouter, commentRouter } from "./Modules/index.js";

const bootstrap = async () => {
  const app = express();

  app.use(express.json());
  await authenticateDB();

  app.use("/users", userRouter);
  app.use('/posts', postRouter);
  app.use('/comments', commentRouter)

  app.use((error, req, res, next) => {
    const status = error?.cause?.status ?? 500;
    res
      .status(status)
      .json({ Message: error.message || "Somthing Went Wrong" });
  });

  app.use("{/*dummy}", (req, res, next) => {
    return res.status(404).json({ Message: "Invalid URl" });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default bootstrap;
