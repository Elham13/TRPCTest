const mongoose = require("mongoose");

const StockInwards = new mongoose.Schema(
  {
    productName: { type: String, required: [true, "Product name is required"] },
    numberOfProducts: {
      type: Number,
      required: [true, "Number of products is required"],
    },
    clientName: String,
    clientNumber: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("SolarStockOutwards", StockInwards);
