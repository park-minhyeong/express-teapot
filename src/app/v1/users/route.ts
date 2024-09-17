import { Router } from "express";
import userService from "../../../service/user";
import userRouter from "./[userId]/route";

const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
  try {
    const results = await userService.read();
    return res.json(results);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

usersRouter.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await userService.create(username, password);
    if (!result) return res.sendStatus(409);
    return res.sendStatus(201);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

usersRouter.use(userRouter);

export default usersRouter;
