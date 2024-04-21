import { NextFunction, Request, RequestHandler, Response } from "express";

export const asyncHandler =
  (fn: RequestHandler) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

export class ErrorHandler extends Error {
  statusCode = 0;
  constructor(message: string, statusCode?: number) {
    super(message);
    this.statusCode = statusCode || 500;

    Error.captureStackTrace(this, this.constructor);
  }
}
