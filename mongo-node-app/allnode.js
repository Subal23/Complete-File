// connecting to local MongoDB

import mongoose from 'mongoose';
const dbURI = 'mongodb://127.0.0.1:27017/PhoneStore';

await mongoose.connect(dbURI)
  .then(() => console.log('Connected to local MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));
// mongoose.disconnect();

// defining schema and model

// const productSchema = new mongoose.Schema({
//   orderId: { type: String, unique: true },
//   brand: String,
//     model: String,
//     price: Number,
//     stock: Number,
//     warranty: String,
//     specifications: String,
// });
// const Products = mongoose.model('Products', productSchema);

// creating and saving product

// async function createAndSaveProducts() {
//   try {
//     const existing = await Products.findOne({ orderId: 'MS12346' });
//     if (existing) {
//       console.log('Product already exists:', existing);
//       return existing;
//     }
//     const newDoc = new Products({
//       orderId: 'MS12346',
//       brand: 'Apple',
//         model: 'iPhone 30',
//         price: 250000,
//         stock: 10,
//         warranty: '3 year',
//         specifications: '7-inch display, S30 Bionic chip, 6G support'
//     });
//     await newDoc.save();
//     console.log('Products saved:', newDoc);
//     return newDoc;
//   } catch (err) {
//     console.error('Error creating product:', err);
//   }
// }
// async function run() {
//   await createAndSaveProducts();
// mongoose.disconnect();
// }
// run();

// finding and updating product

// async function findAndUpdateProduct(orderId, updateData) {
//     try{
//         const product = await Products.findOne({ orderId });
//         if (!product) {
//             console.log('Product not found');
//             return;
//         }
//         console.log('Before update:', product);
//         for (const key in updateData) {
//             if (key !== '_id' && key !== 'orderId') {
//                 product[key] = updateData[key];
//             }
//         }
//         const updatedProduct = await product.save();
//         console.log('After update:', updatedProduct);
//     } catch (err) {
//         console.error('Error updating product:', err);
//     }
// }
// await findAndUpdateProduct('MS12346', {
//     model: 'iPhone 30 pro max',
//     price: 300000,
//     stock: 15,
// });
// mongoose.disconnect();

// deleting warranty field

// async function deleteWarranty(orderId) {
//     try {
//         const result = await Products.updateOne({ orderId }, { $unset: { warranty: '3 year' } });
//         if(result.warrantyafield===0){
//             console.log('No warranty field found to delete');
//         }
//         else{
//             console.log('warranty field deleted successfully');
//         }
//     } catch (err) {
//         console.error('Error deleting warranty field:', err);
//     }
// }
// await deleteWarranty('MS12346');
// mongoose.disconnect();

// deleting many fields

// async function deleteManyFields(orderId) {
//     try {
//         const result = await Products.updateMany({ orderId:'MS12346' }, { $unset: {specifications:'7-inch display, S30 Bionic chip, 6G support',stock:'30'}});
//         if(result.nField===0){
//             console.log('No fields found to delete');
//         }
//         else{
//             console.log('specifications and stock fields deleted successfully');
//         }
//     } catch (err) {
//         console.error('Error deleting fields:', err);
//     }
// }
// await deleteManyFields('MS12345');
// mongoose.disconnect();


// recovering many deleted fields

// async function recoverDeletedFields(orderId, recoveryData) {
//     try {
//         const result = await Products.updateMany({ orderId }, { $set: recoveryData });
//         if(result.nFields===0){
//             console.log('No fields found to recover');
//         }
//         else{
//             console.log('Fields recovered successfully');
//         }
//     } catch (err) {
//         console.error('Error recovering fields:', err);
//     }
// }
// await recoverDeletedFields('MS12345', {specifications: '6.7-inch display, A17 Bionic chip, 5G support',stock: 20,warranty: '1 year'});
// await recoverDeletedFields('MS12346', {specifications: '7-inch display, S30 Bionic chip, 6G support',stock: 15,warranty: '3 year'});

// mongoose.disconnect(); 


// deleting one field

// async function deleteOneFields(orderId) {
//     try {
//         const result = await Products.updateOne({ orderId:'MS12345' }, { $unset: {stock:'50'}});
//         if(result.nField===0){
//             console.log('No fields found to delete');
//         }
//         else{
//             console.log('stock field deleted successfully');
//         }
//     } catch (err) {
//         console.error('Error deleting fields:', err);
//     }
// }
// await deleteOneFields('MS12345');
// mongoose.disconnect();


// recovering one deleted field

// async function recoverOneDeletedField(orderId, recoveryData) {
//     try {
//         const result = await Products.updateOne({ orderId }, { $set: recoveryData });
//         if(result.nFields===0){
//             console.log('No fields found to recover');
//         }
//         else{
//             console.log('Field recovered successfully');
//         }
//     } catch (err) {
//         console.error('Error recovering field:', err);
//     }
// }
// await recoverOneDeletedField('MS12345', {stock: 50});
// mongoose.disconnect();

// fetching all products

// async function fetchAllProducts() {
//     try {
//         const products = await Products.find({brand:'Apple'});
//         console.log('All Products:', products);
//     } catch (err) {
//         console.error('Error fetching products:', err);
//     }
// }
// await fetchAllProducts();
// mongoose.disconnect();

// checking and fetching products

async function checkAndFetchProducts() {
    try {
        const collectionName = 'products';
        const collections = await mongoose.connection.db.listCollections().toArray();
        const exists = collections.some(col => col.name === collectionName);
        if (!exists) {
            console.log('Collection does not found.');
            return;
        }
        else{
            console.log('Collection found.');
        }
        const data = await mongoose.connection.db
            .collection(collectionName)
            .find({})
            .toArray();
        console.log('Fetched Products:', data);
    }
    catch (err) {
        console.error('Error:', err);
    }
}
await checkAndFetchProducts();
mongoose.disconnect();