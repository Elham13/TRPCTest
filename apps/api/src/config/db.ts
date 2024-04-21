import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI_LOCAL;

    if (!uri) throw new Error("Failed to get mongodb uri from env");

    const conn = await mongoose.connect(uri);
    console.log(
      `Mongodb connected on ${conn.connection.host}/${conn.connection.name}:${conn.connection.port}`
    );
  } catch (error) {
    console.log("Mongo Connection Error: ", error);
  }
};

export default connectDB;
