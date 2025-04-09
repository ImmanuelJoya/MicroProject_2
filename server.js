import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import itemRoutes from './routes/itemRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', itemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});