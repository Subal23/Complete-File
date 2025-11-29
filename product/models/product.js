const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  orderId: { type: String, unique: true, required: true },
  brand: String,
  model: String,
  price: Number,
  stock: Number,
  warranty: String,
  specifications: String,
});

module.exports = mongoose.model('Product', productSchema);
