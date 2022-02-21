import express from "express";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config({ path: "./.env" });
const app = express();
app.use(bodyparser.json());
app.use(cors());
app.use(helmet({ hidePoweredBy: true }));
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// start the Express server
const port = process.env.PORT;
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
