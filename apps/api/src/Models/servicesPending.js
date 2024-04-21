const mongoose = require("mongoose");

const ServicesPending = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: [true, "Customer name is required"],
    },
    phoneNumber: { type: Number, required: [true, "Phone number is required"] },
    city: String,
    address: String,
    installationDate: {
      type: Date,
      default: Date.now,
    },
    installationExecutive: String,
    complainDetail: String,
    status: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("ServicesPending", ServicesPending);
