import { NextFunction, Request, Response } from "express";
import dayjs from "dayjs";
import { ErrorHandler } from "../utils/helpers";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err?.statusCode || 500;
  err.message = err?.message || "Internal Server Error!";

  // Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `JSON Web Token is invalid, try again.`;
    err = new ErrorHandler(message, 400);
  }

  // JWT Expire Error
  if (err.name === "TokenExpiredError") {
    const message = `JSON Web Token is expired, try again.`;
    err = new ErrorHandler(message, 400);
  }

  // Mongodb validation error
  if (err.name === "ValidationError") {
    const keyName = err?.errors[Object.keys(err.errors)[0]]?.path;
    const errObj = err.errors[keyName]?.properties;
    err = new ErrorHandler(
      `${errObj?.message}. Field name: ${errObj?.path}`,
      400
    );
  }

  //MongoServerError
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    const message = `Field ${field} is already exist, Please enter a unique ${field}`;
    err = new ErrorHandler(message, err.statusCode);
  }

  return res.status(err.statusCode).json({
    timestamp: dayjs().unix(),
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export default errorHandler;
