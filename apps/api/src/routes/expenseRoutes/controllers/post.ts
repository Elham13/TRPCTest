import { Request, Response } from "express";
import { asyncHandler } from "../../../utils/helpers";
import Expense from "../../../Models/expense";

export const createRecord = asyncHandler(
  async (req: Request, res: Response) => {
    const newRecord = await Expense.create({
      ...req.body,
      creatorName: req.user?.name,
    });
    return res
      .status(201)
      .json({ success: true, message: "Created", newRecord });
  }
);
