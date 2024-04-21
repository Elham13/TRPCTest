const mongoose = require("mongoose");

const StockInwards = new mongoose.Schema(
  {
    creatorName: {
      type: String,
      default: "",
    },
    productName: { type: String, required: [true, "Product name is required"] },
    numberOfProducts: {
      type: Number,
      required: [true, "No of products is required"],
    },
    numberOfProductsDifference: {
      type: Number,
      default: 0,
    },
    stockOutward: {
      type: Array,
      default: [],
    },
    remark: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("SolarStockInward", StockInwards);
