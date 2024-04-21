import { NextFunction, Request, Response } from "express";
import { ErrorHandler, asyncHandler } from "../../../utils/helpers";
import Client from "../../../Models/client";

export const deleteRecord = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body;
    delete req.body.id;
    if (!id) return next(new ErrorHandler("id field missing in request body"));
    const deletedRecord = await Client.findByIdAndDelete(id);

    if (!deletedRecord)
      return next(new ErrorHandler("No record found to delete"));
    return res
      .status(200)
      .json({ success: true, message: "Deleted", deletedRecord });
  }
);
