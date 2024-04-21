import { IUser } from "../user";

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  inStock: number;
  createdBy: string | IUser;
  emiAvailable: boolean;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}
