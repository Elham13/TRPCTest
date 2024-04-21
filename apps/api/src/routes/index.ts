import { Request, Response, Router } from "express";
import userRoutes from "./userRoutes";
import { asyncHandler } from "../utils/helpers";
import clientRoutes from "./clientRoutes";
import expenseRoutes from "./expenseRoutes";
import wpSales from "./wp/sales";

const allRoutes = Router();

allRoutes.get(
  "/health-check",
  asyncHandler((req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      message: "Hey there, the server is working fine!",
    });
  })
);

allRoutes.use("/user", userRoutes);
allRoutes.use("/client", clientRoutes);
allRoutes.use("/expense", expenseRoutes);
allRoutes.use("/wp/sales", wpSales);

export default allRoutes;
