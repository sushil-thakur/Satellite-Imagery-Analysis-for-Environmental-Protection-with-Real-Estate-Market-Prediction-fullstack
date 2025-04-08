import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const dbConnect = async () => {
  try {
    const url = process.env.MONGODB_URI;

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB connection successful...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
  }
};

export default dbConnect;
