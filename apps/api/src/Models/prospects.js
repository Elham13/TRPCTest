const mongoose = require("mongoose");

const Prospects = new mongoose.Schema(
  {
    creatorName: { type: String },
    customerName: {
      type: String,
      required: [true, "Customer name is required"],
    },
    phoneNumber: { type: Number, required: [true, "Phone number is required"] },
    city: String,
    address: String,
    executiveName: String,
    remarks: String,
    status: String,
    followUpDate: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prospect", Prospects);
