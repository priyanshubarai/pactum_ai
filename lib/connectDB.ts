import mongoose, { Connection } from "mongoose";
const uri = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    if(uri){
      const conn = await mongoose.connect(uri);
      console.log(`MongoDB connected: ${conn.connection.host}`);
    }else{
      console.error("DB Connection failed!")
    }
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
