import dotenv from "dotenv";
import cors from "cors";
import express, { Express, Request, Response } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import connectDB from "./config/db";
import allRoutes from "./routes";
import errorHandler from "./middlewares/errorHandler";

dotenv.config({ path: "../." });

const app: Express = express();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));

app.use("/api", allRoutes);

app.use("*", (req: Request, res: Response) => {
  return res.status(404).json({ success: false, message: "Address not found" });
});

app.use(errorHandler);

const port = 5000;
app.listen(port, () => console.log(`Server started at port ${port}`));
