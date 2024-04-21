import { ERole } from "../enums";

export interface IUser {
  _id: string;
  name: string;
  phone: string;
  email: string;
  password: string;
  role: ERole;
  createdAt: Date;
  updatedAt: Date;
}
