import mongoose from "mongoose";

const CounterSchema = new mongoose.Schema(
  {
    model: { type: String, required: true },
    field: { type: String, required: true },
    count: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Counter =
  mongoose.models.Counter || mongoose.model("Counter", CounterSchema);
