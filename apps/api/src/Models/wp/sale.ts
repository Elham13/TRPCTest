import {
  IBankDetail,
  IChequeDetail,
  IEMIPayment,
  IWPRemark,
  IWPSale,
} from "@root/libs/types/collections/wp/sales";
import { Document, Schema, model, models } from "mongoose";

interface IWPSaleSchema extends Omit<IWPSale, "_id">, Document {}
interface IWPRemarkSchema extends Omit<IWPRemark, "_id">, Document {}
interface IChequeDetailSchema extends Omit<IChequeDetail, "_id">, Document {}
interface IBankDetailSchema extends Omit<IBankDetail, "_id">, Document {}
interface IEMIPaymentSchema
  extends Omit<IEMIPayment, "_id" | "status">,
    Document {
  status: string;
}

const RemarkSchema = new Schema<IWPRemarkSchema>(
  {
    remark: { type: String, required: true },
    date: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);

const ChequeDetailSchema = new Schema<IChequeDetailSchema>(
  {
    chequeNo: { type: String, required: true },
    accountNo: { type: String, default: "" },
    payeeName: { type: String, default: "" },
    transactionCode: { type: String, default: "" },
    chequeAmount: { type: Number, default: 0 },
    chequeDate: { type: Date, default: null },
  },
  { timestamps: true }
);

const BankDetailSchema = new Schema<IBankDetailSchema>(
  {
    bankName: { type: String, required: true },
    accountNo: { type: String, required: true },
    IFSCCode: { type: String, default: "" },
    location: { type: String, default: "" },
    paymentDate: { type: Date, required: true },
  },
  { timestamps: true }
);

const EmiPaymentSchema = new Schema<IEMIPaymentSchema>(
  {
    status: {
      type: String,
      enum: ["Pending", "Completed"],
      required: true,
      default: "Pending",
    },
    paidAmount: { type: Number, required: true, default: 0 },
    expectedPaymentDate: { type: Date, default: null },
    paymentDate: { type: Date, default: null },
    nextPaymentDate: { type: Date, default: null },
    paymentMethod: {
      type: String,
      enum: ["EMI", "Card", "Cash", "UPI", "Cheque"],
      required: true,
    },
    bankDetail: { type: BankDetailSchema, default: null },
    chequeDetail: { type: ChequeDetailSchema, default: null },
  },
  { timestamps: true }
);

const SaleSchema = new Schema<IWPSaleSchema>(
  {
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    installedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    referredBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    installationDate: { type: Date, default: Date.now() },
    remarks: { type: [RemarkSchema], default: [] },
    paymentMethod: {
      type: String,
      enum: ["EMI", "Card", "Cash", "UPI", "Cheque"],
      required: true,
    },
    saleType: {
      type: String,
      enum: ["Sale", "Exchange"],
      required: true,
    },
    downPayment: { type: EmiPaymentSchema, default: null },
    emiPayments: { type: [EmiPaymentSchema], default: [] },
    bankDetail: { type: BankDetailSchema, default: null },
    chequeDetail: { type: ChequeDetailSchema, default: null },
  },
  { timestamps: true }
);

const WPSale = models.WPSale || model<IWPSaleSchema>("WPSale", SaleSchema);

export default WPSale;
