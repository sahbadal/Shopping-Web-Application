import mongoose from 'mongoose';
import { MONGO_URI } from './index.js';


const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('DataBase connected');
    } catch (error) {
        console.error('DataBase connection error:', error);
        process.exit(1);
    }
};

export default connectDB;
