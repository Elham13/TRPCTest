import { NextFunction, Request, Response } from "express";
import { ErrorHandler, asyncHandler } from "../utils/helpers";

const isAdmin = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.user && req.user?.role === "Admin") {
      next();
    } else
      return next(
        new ErrorHandler("You are not authorized, an Admin role is required")
      );
  }
);

export default isAdmin;
