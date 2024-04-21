import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ErrorHandler, asyncHandler } from "../utils/helpers";
import { UserInReq } from "../utils/types";

const { JWT_SECRET } = process.env;

const isProtected = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.token as string;
    if (JWT_SECRET && token) {
      const decoded = (await jwt.verify(
        token,
        JWT_SECRET
      )) as unknown as UserInReq;
      if (decoded) {
        req.user = decoded;
        next();
      } else return next(new ErrorHandler("Failed to verify token!", 401));
    } else return next(new ErrorHandler("Unauthorized!", 401));
  }
);

export default isProtected;
