import { Document, Schema, model, models } from "mongoose";
import { Counter } from "../counter";
import { IWPCustomer } from "@root/libs/types/collections/wp/customer";

interface IWPCustomerSchema extends Omit<IWPCustomer, "_id">, Document {}

const WPCustomerSchema = new Schema<IWPCustomerSchema>(
  {
    name: { type: String, required: true },
    customerId: { type: String },
    phone: { type: String, required: true },
    alternatePhone: { type: String },
    address: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: "user", required: true },
  },
  { timestamps: true }
);

WPCustomerSchema.pre("save", async function (next) {
  const doc = this;
  const counter = await Counter.findOne({ model: "WPTotalSales" });
  if (!counter) {
    await Counter.create({
      model: "WPTotalSales",
      field: "customerId",
      count: 1,
    });
    doc.customerId = `cyrus1`;
    next();
  } else {
    const count = counter.count + 1;
    doc.customerId = `cyrus${count}`;
    counter.count = count;
    await counter.save();
    next();
  }
});

const WPCustomer =
  models.WPCustomer || model<IWPCustomerSchema>("WPCustomer", WPCustomerSchema);

export default WPCustomer;
