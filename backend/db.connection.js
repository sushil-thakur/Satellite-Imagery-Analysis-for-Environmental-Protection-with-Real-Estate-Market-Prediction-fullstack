import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const url =
    "mongodb+srv://realestate:1234@sushil.rf9fj.mongodb.net/?retryWrites=true&w=majority&appName=sushil"

    await mongoose.connect(url);

    console.log("DB connection successful...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
  }
};

export default dbConnect;