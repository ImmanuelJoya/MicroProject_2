import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

console.log('MONGO_URI:', process.env.MONGO_URI); // Debug line

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in .env file');
        }
        await mongoose.connect(process.env.MONGO_URI); // Remove deprecated options
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

export default connectDB;