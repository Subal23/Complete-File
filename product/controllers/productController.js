const Product = require('../models/Product');

// CREATE
exports.createProduct = async (req, res) => {
  try {
    const existing = await Product.findOne({ orderId: req.body.orderId });
    if (existing) return res.status(400).json({ message: 'Product already exists' });

    const product = await Product.create(req.body);
    res.status(201).json({ message: 'Product created', product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ALL
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getProductByOrderId = async (req, res) => {
  try {
    const product = await Product.findOne({ orderId: req.params.orderId });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { orderId: req.params.orderId },
      req.body,
      { new: true }
    );
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Updated successfully', product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ orderId: req.params.orderId });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Deleted successfully', product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
