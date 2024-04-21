const mongoose = require("mongoose");

const StockInwards = new mongoose.Schema(
  {
    creatorName: String,
    productName: String,
    numberOfProducts: Number,
    clientName: String,
    clientNumber: Number,
    technicianName: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("StockOutward", StockInwards);
