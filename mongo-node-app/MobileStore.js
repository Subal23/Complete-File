const mongoose = require('mongoose');
const dbURI = 'mongodb://127.0.0.1:27017/PhoneStore';

mongoose.connect(dbURI)
  .then(() => console.log('Connected to local MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));
  
const productSchema = new mongoose.Schema({
  orderId: { type: String, unique: true },
  brand: String,
  model: String,
  price: Number,
  stock: Number,
  warranty: String,
  specifications: String,
});
const Products = mongoose.model('Products', productSchema);
async function createAndSaveProducts() {
  try {
    const existing = await Products.findOne({ orderId: 'MS12345' });
    if (existing) {
      console.log('Product already exists:', existing);
      return existing;
    }
    const newDoc = new Products({
      orderId: 'MS12345',
      brand: 'Apple',
      model: 'iPhone 15 pro',
      price: 120000,
      stock: 20,
      warranty: '1 year',
      specifications: '6.7-inch display, A17 Bionic chip, 5G support'
    });
    await newDoc.save();
    console.log('Products saved:', newDoc);
    return newDoc;
  } catch (err) {
    console.error('Error creating product:', err);
  }
}
async function findAndUpdateProduct(orderId, updateData) {
  try {
    const product = await Products.findOne({ orderId });
    if (!product) {
      console.log('Product not found');
      return;
    }
    console.log('Before update:', product);
    for (const key in updateData) {
      if (key !== '_id' && key !== 'orderId') {
        product[key] = updateData[key];
      }
    }
    const updatedProduct = await product.save();
    console.log('After update:', updatedProduct);
  } catch (err) {
    console.error('Error updating product:', err);
  }
}
async function run() {
  await createAndSaveProducts();
  await findAndUpdateProduct('MS12345', {
    price: 200000,
    model: 'iPhone 20 pro max',
    stock: 50,
  });
  mongoose.disconnect();
}
run();
