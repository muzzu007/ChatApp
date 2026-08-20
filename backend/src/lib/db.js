import mongoose from "mongoose";

export async function connectDB(){
    try{
        const mongoUri = process.env.MONGO_URI;
        if(!mongoUri){
            throw new Error("Mongo_uri is required")
        }
        await mongoose.connect(mongoUri);
        console.log("MongoDb connected");

    }catch(error){
        console.error("MongoDB connection error:", error.message);
        process.exit(1)

    }
}