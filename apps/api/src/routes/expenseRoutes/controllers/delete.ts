import { NextFunction, Request, Response } from "express";
import { ErrorHandler, asyncHandler } from "../../../utils/helpers";
import Expense from "../../../Models/expense";

export const deleteRecord = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body;
    delete req.body.id;
    if (!id) return next(new ErrorHandler("id field missing in request body"));
    const deletedRecord = await Expense.findByIdAndDelete(id);

    if (!deletedRecord)
      return next(new ErrorHandler("No record found to delete"));
    return res
      .status(200)
      .json({ success: true, message: "Deleted", deletedRecord });
  }
);
