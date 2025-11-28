import mongoose from "mongoose";

const dbURI = "mongodb://127.0.0.1:27017/PhoneStore";

await mongoose.connect(dbURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

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

