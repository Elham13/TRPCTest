const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    CustomerName: {
      type: String,
      required: [true, "Customer name is required"],
    },
    MobileNumber: {
      type: Number,
      required: [true, "Mobile number is required"],
    },
    PropertyType: String,
    VentureName: String,
    Unit: String,
    SurveyNumber: Number,
    SquareYards: Number,
    SiteLocation: String,
    PlotNumber: String,
    PricePerSquare: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("RSPropertyInHand", Schema);
