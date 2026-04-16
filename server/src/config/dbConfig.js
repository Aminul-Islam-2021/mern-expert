import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DBConnect = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_LOCAL || process.env.MONGODB_SRV,
    );
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default DBConnect;
