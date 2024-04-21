import { NextFunction, Request, Response } from "express";
import { ErrorHandler, asyncHandler } from "../../../utils/helpers";
import Expense from "../../../Models/expense";

export const getAllRecords = asyncHandler(
  async (req: Request, res: Response) => {
    const { limit, skip } = req.query;
    const data = await Expense.find({})
      .skip(skip ? Number(skip) : 0)
      .limit(limit ? Number(limit) : 10);
    const count = await Expense.countDocuments({});

    return res
      .status(200)
      .json({ success: true, message: "Fetched", count, data });
  }
);

export const getRecordById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (!id) return next(new ErrorHandler("id is required in params!"));
    const data = await Expense.findById(id);
    if (!data)
      return next(new ErrorHandler(`No record found with the id ${id}`));
    return res.status(200).json({ success: true, message: "Fetched", data });
  }
);
