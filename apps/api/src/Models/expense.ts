import mongoose from "mongoose";

const Expenses = new mongoose.Schema(
  {
    expenseDate: {
      type: Date,
      default: Date.now,
    },
    creatorName: String,
    executiveName: {
      type: String,
      required: [true, "Executive name is required"],
    },
    amount: { type: Number, required: [true, "Amount is required"] },
    purpose: String,
    remark: String,
    paymentMode: String,
  },
  { timestamps: true }
);

const Expense = mongoose.models.Expense || mongoose.model("Expense", Expenses);
export default Expense;
