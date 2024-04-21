import mongoose from "mongoose";
import { Counter } from "./counter";

const ClientsSchema = new mongoose.Schema(
  {
    customerId: { type: Number, unique: true },
    creatorName: { type: String },
    customerName: {
      type: String,
      required: [true, "Please enter Customer Name"],
    },
    productName: {
      type: String,
      required: [true, "Please enter Product Name"],
    },
    reference: String,
    phoneNumber: Number,
    alternatePhoneNumber: Number,
    address: String,
    installationDate: {
      type: Date,
      default: Date.now,
    },
    installationExecutive: String,
    amount: { type: Number, required: [true, "Amount is required"] },
    paymentMode: String,
    accNo: Number,
    branchName: String,
    chequeNo: String,
    chequeDate: Date,
    remarks: String,
    emi: Boolean,
    advancePayment: Number,
    duration: String,
    firstPaymentStatus: {
      type: String,
      default: "Pending",
    },
    firstPaidAmount: {
      type: Number,
      default: 0,
    },
    firstNextPaymentDate: {
      type: Date,
      default: null,
    },
    firstPaidDate: {
      type: Date,
      default: null,
    },
    firstEmiDate: {
      type: Date,
      default: null,
    },
    firstPaymentMode: String,
    secondPaymentStatus: {
      type: String,
      default: "Pending",
    },
    secondPaidAmount: {
      type: Number,
      default: 0,
    },
    secondNextPaymentDate: {
      type: Date,
      default: null,
    },
    secondPaidDate: {
      type: Date,
      default: null,
    },
    secondEmiDate: {
      type: Date,
      default: null,
    },
    secondPaymentMode: String,
    thirdPaymentStatus: {
      type: String,
      default: "Pending",
    },
    thirdPaidAmount: {
      type: Number,
      default: 0,
    },
    thirdPaidDate: {
      type: Date,
      default: null,
    },
    thirdEmiDate: {
      type: Date,
      default: null,
    },
    thirdPaymentMode: String,
    serviceStatus: {
      type: String,
      default: "Pending",
    },
    dueAmountsCleared1: {
      type: Boolean,
      default: false,
    },
    dueAmountsCleared2: {
      type: Boolean,
      default: false,
    },
    dueAmountsCleared3: {
      type: Boolean,
      default: false,
    },
    nextDates: {
      type: Array,
    },
    services: {
      type: Array,
      default: [],
    },
    salesAndExchanges: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

ClientsSchema.pre("save", async function (next) {
  const doc = this;
  try {
    let counter = await Counter.findOne({
      model: "Client",
      field: "customerId",
    });

    if (!counter) {
      counter = await Counter.create({ model: "Client", field: "customerId" });
    } else {
      counter = await Counter.findByIdAndUpdate(
        counter._id,
        { $inc: { count: 1 } },
        { upsert: true, new: true }
      );
    }
    doc.customerId = counter.count;
    next();
  } catch (error: any) {
    next(error);
  }
});

const Client =
  mongoose.models.Client || mongoose.model("Client", ClientsSchema);

export default Client;
