import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import "dotenv/config";
import v1Router from "./v1/route.js";
import moment from "moment-timezone";

dotenv.config();
const app = express();
const { PORT: port } = process.env;

app.set("trust proxy", true);
app.set("view engine", "ejs");
// app.use(cors(await getCorsOption()));
app.use(express.json());
app.use(morgan("combined"));
app.get("/", (_, res) => {
  res.sendStatus(418);
});

app.use("/v1", v1Router);
app.listen(port, () => {
  console.log(
    `Server is running on http://localhost:${port} from ${moment.tz.guess()}`
  );
});
