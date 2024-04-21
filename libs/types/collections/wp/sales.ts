import { EEmiStatus, EPaymentMethod, ESaleType } from "../../enums";
import { IProduct } from "../product";
import { IUser } from "../user";

export interface IWPRemark {
  _id: string;
  remark: string;
  date: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IChequeDetail {
  _id: string;
  chequeNo: string;
  accountNo?: string;
  payeeName?: string;
  transactionCode?: string;
  chequeAmount: number;
  chequeDate?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBankDetail {
  _id: string;
  bankName: string;
  accountNo: string;
  IFSCCode?: string;
  location?: string;
  paymentDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IEMIPayment {
  _id: string;
  status: EEmiStatus;
  paidAmount: number;
  expectedPaymentDate: Date;
  paymentDate: Date;
  nextPaymentDate: Date;
  paymentMethod: EPaymentMethod;
  bankDetail?: IBankDetail;
  chequeDetail?: IChequeDetail;
  createdAt: Date;
  updatedAt: Date;
}

export interface IWPSale {
  _id: string;
  product: string | IProduct;
  installedBy: string | IUser;
  referredBy: string | IUser;
  createdBy: string | IUser;
  installationDate: Date;
  remarks: IWPRemark[];
  paymentMethod: EPaymentMethod;
  saleType: ESaleType;
  downPayment: IEMIPayment | null;
  emiPayments?: IEMIPayment[];
  bankDetail?: IBankDetail | null;
  chequeDetail: IChequeDetail | null;
  createdAt: Date;
  updatedAt: Date;
}
