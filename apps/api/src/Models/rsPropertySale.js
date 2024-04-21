const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    CustomerName: {
      type: String,
      required: [true, "Customer Name is required"],
    },
    MobileNumber: {
      type: Number,
      required: [true, "Mobile Number is required"],
    },
    SurveyNumber: Number,
    SquareYards: Number,
    SiteLocation: String,
    PlotNumber: String,
    PricePerSquare: Number,
    Towards: String,
    PaymentMode: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("RSPropertySale", Schema);
