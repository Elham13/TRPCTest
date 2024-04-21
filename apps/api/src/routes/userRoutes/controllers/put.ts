import { NextFunction, Request, Response } from "express";
import User from "../../../Models/user";
import { ErrorHandler, asyncHandler } from "../../../utils/helpers";

export const updateUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body;
    delete req.body.id;
    if (!id) return next(new ErrorHandler("id field missing in request body"));
    const updatedRecord = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedRecord) return next(new ErrorHandler("Nothing updated"));
    return res
      .status(200)
      .json({ success: true, message: "Updated", updatedRecord });
  }
);
