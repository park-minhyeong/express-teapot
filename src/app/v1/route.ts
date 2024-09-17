import { Router } from "express";
import usersRouter from "./users/route.js";

const v1Router = Router();

v1Router.get("/", (_, res) => {
  res.sendStatus(418);
});

v1Router.use("/users", usersRouter);
export default v1Router;
