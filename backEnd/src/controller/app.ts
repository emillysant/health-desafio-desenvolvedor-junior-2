import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
export const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log("Running Server at 3003 port");
});
