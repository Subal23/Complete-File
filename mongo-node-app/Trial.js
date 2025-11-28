const mongoose = require('mongoose');

// Replace 'yourDatabaseName' with the actual name of your local database
const dbURI = 'mongodb://127.0.0.1:27017/Trial';

mongoose.connect(dbURI)
  .then(() => console.log('Connected to local MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const shopSchema = new mongoose.Schema({
  orderId: String,
  customerName: String,
  product: String,
  quantity: Number,
  price: Number,
  contactNumber: String,
});

const Shops = mongoose.model('Shops', shopSchema);

async function createAndSaveShops()

{
  const newDoc = new Shops({
  orderId: 'ORD12345',
  customerName: 'Murugan',
  product: 'Mobile',
  quantity: 1,
  price: 50000,
  contactNumber: '9876543210',
  });

  await newDoc.save();
  console.log('Order saved:', newDoc);
}

{
createAndSaveShops()
.then(() => mongoose.disconnect());}