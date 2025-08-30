import mongoose from 'mongoose';
import { config } from './env.js';

export const connectDB = async () => {
    try{
        await mongoose.connect(config.mongo_url, {
            dbName : "food_delivery_mern"
        });
        console.log("Db connected");
    }
    catch (error) {
        console.error("error connectng to DataBase ", error.message);
        process.exit(1);
    }
}
