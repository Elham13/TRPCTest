import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import connectDB from "./config/db";

dotenv.config({ path: "../." });

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello json");
});

const port = 5000;
app.listen(port, () => console.log(`Server started at port ${port}`));
