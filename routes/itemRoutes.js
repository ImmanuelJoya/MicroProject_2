import express from 'express';
import Item from '../models/item.js';

const router = express.Router();

// CREATE operation
router.post('/items', async (req, res) => {
    console.log('Request Body:', req.body); // Debug line
    try {
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;