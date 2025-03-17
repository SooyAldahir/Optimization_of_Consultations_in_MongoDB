const express = require("express");
const Product = require("../src/productModel");
const router = express.Router();
const app = express();

// BASIC QUERYS
// get products by category
router.get("/category/:category", async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// find products by name
router.get("/name/:name", async (req, res) => {
  try {
    const product = await Product.find({ $text: { $search: req.params.name } });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get products by date range
router.get("/date-range", async (req, res) => {
  const { startDate, endDate } = req.query;
  try {
    const products = await Product.find({
      date: {
        $gte: new Date(startDate),
        $lt: new Date(endDate),
      },
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//CRUD

// Create a new product
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({
      error: "Error al crear un nuevo producto",
      message: error.message,
    });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener productos",
      message: error.message,
    });
  }
});

// Get a product by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({
                error: 'Producto no encontrado'
            });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener el producto',
            message: error.message
        });
    }
});

// updsate a product by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            req.body, // Usando directamente req.body para actualizar
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({
                error: 'Producto no encontrado'
            });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({
            error: 'Error al actualizar el producto',
            message: error.message
        });
    }
});

// Delete a product by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({
                error: 'Producto no encontrado'
            });
        }
        res.status(200).json({
            message: 'Producto eliminado exitosamente'
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al eliminar el producto',
            message: error.message
        });
    }
});

module.exports = router;
