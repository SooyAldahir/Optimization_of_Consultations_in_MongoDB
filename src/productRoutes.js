const express = require('express');
const Product = require('../src/productModel');
const router = express.Router();

// get products by category
router.get('/category/:category', async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// find products by name
router.get('/name/:name', async (req, res) => {
    try {
        const product = await Product.find({ $text: { $search: req.params.name } });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// get products by date range
router.get('/date-range', async (req, res) => {
    const { startDate, endDate } = req.query;
    try {
        const products = await Product.find({
            date: {
                $gte: new Date(startDate),
                $lt: new Date(endDate)
            }
        });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
