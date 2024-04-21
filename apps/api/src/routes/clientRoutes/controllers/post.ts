import { Request, Response } from "express";
import { asyncHandler } from "../../../utils/helpers";
import Client from "../../../Models/client";

export const createRecord = asyncHandler(
  async (req: Request, res: Response) => {
    const newRecord = await Client.create(req.body);
    return res
      .status(201)
      .json({ success: true, message: "Created", newRecord });
  }
);
