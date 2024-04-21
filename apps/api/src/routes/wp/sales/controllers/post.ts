import { Request, Response } from "express";
import { asyncHandler } from "../../../../utils/helpers";
import Sale from "@/Models/wp/sale";

export const createRecord = asyncHandler(
  async (req: Request, res: Response) => {
    const newRecord = await Sale.create(req.body);
    return res
      .status(201)
      .json({ success: true, message: "Created", newRecord });
  }
);
