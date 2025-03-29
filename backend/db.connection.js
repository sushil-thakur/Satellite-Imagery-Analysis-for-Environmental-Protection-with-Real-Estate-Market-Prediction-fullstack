import mongoose from "mongoose";

import dotenv from "dotenv";
import process from "process";

dotenv.config({ path: './.env' }); // Load environment variables from .env file

const dbConnect = async () => {
    try {
        const url = process.env.MONGO_URI 
        await mongoose.connect(url);
        console.log("DB connection successful...");
    } catch (error) {
        console.log("Connection failed...");
        console.log(error.message);
    }
};


export default dbConnect; // Export the function to use in other files