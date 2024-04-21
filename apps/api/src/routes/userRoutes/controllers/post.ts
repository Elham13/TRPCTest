import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../../../Models/user";
import { ErrorHandler, asyncHandler } from "../../../utils/helpers";
import { generateToken } from "../../../utils/jwt";

export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const newRecord = await User.create(req.body);
  return res.status(201).json({ success: true, message: "Created", newRecord });
});

export const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { phone, password } = req.body;

    if (!phone) return next(new ErrorHandler("Phone number is required"));
    if (!password) return next(new ErrorHandler("Password is required"));

    const user = await User.findOne({ phone });

    if (!user)
      return next(new ErrorHandler("Wrong credentials, please try again."));

    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword)
      return next(new ErrorHandler("Wrong credentials, please try again."));

    const token = await generateToken({
      name: user.name,
      role: user.role,
      phone: user.phone,
    });

    return res
      .cookie("token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        success: true,
        message: "Login Success",
        data: { ...user?._doc, password: undefined },
        count: 1,
      });
  }
);
