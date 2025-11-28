const mongoose = require("mongoose");
const express = require("express");

mongoose.connect("mongodb://127.0.0.1:27017/MobileStore")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Correct schema structure
const productSchema = new mongoose.Schema({
  orderId: { type: String },
  brand: { type: String }
});

// Correct model name
const Product = mongoose.model("Product", productSchema);

const app = express();
app.use(express.json());

// POST API - Create Product
app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json({ message: "Product created", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET API - Fetch Products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(2004, () => console.log("API running on port 2004"));


// ----------------------
// PUT: Update record by ID
// ----------------------
app.put('/data/:id', async (req, res) => {
    try {
        const updatedData = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedData) return res.status(404).json({ message: 'Data not found' });
        res.json({ message: 'Data updated', data: updatedData });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ----------------------
// DELETE: Delete record by ID
// ----------------------
app.delete('/data/:id', async (req, res) => {
    try {
        const deletedData = await Data.findByIdAndDelete(req.params.id);
        if (!deletedData) return res.status(404).json({ message: 'Data not found' });
        res.json({ message: 'Data deleted', data: deletedData });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start server
app.listen(2004, () => console.log('API running on port 2004'));