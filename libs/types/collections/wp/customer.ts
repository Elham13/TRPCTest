import { IUser } from "../user";

export interface IWPCustomer {
  _id: string;
  name: string;
  customerId: string;
  phone: string;
  alternatePhone?: string;
  address: string;
  createdBy: string | IUser;
  createdAt: Date;
  updatedAt: Date;
}
