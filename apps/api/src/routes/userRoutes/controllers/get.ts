import { NextFunction, Request, Response } from "express";
import User from "../../../Models/user";
import { ErrorHandler, asyncHandler } from "../../../utils/helpers";

export const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  const data = await User.find({});
  const count = await User.countDocuments({});

  return res
    .status(200)
    .json({ success: true, message: "Fetched", count, data });
});

export const getUserById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (!id) return next(new ErrorHandler("id is required in params!"));
    const data = await User.findById(id).select("-password");
    return res.status(200).json({ success: true, message: "Fetched", data });
  }
);
