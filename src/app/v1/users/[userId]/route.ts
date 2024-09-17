import { Router } from "express";
import userService from "../../../../service/user";
import { isUserUpdate } from "../../../../interface/User";

const userRouter = Router();

userRouter.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await userService.readById(Number(userId));
    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

userRouter.patch("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const { username, password } = req.body;
    if (!isUserUpdate({ username, password })) return res.sendStatus(400);
    const result = await userService.update(Number(userId), {
      username,
      password,
    });
    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

export default userRouter;
