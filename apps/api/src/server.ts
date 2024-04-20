import cors from "cors";
import express from "express";

const app = express();

let a = 1;
a = "1";
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello json");
});

const port = 5000;
app.listen(port, () => console.log(`Server started at port ${port}`));
