const mongoose = require("mongoose");

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

module.exports = mongoose.model("SolarExpense", Expenses);
