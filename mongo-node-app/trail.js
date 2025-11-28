const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// ---------------- DATABASE CONNECTION ----------------
mongoose.connect('mongodb://127.0.0.1:27017/Personal')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));


// ---------------- SCHEMA & MODEL ----------------
const dataSchema = new mongoose.Schema({
    rollId: String,
    name: String,
    age: Number,
    job: String,
    department: String,
    dob: Date,
    gender: String,
    contactNumber: String
});

const Data = mongoose.model('Data', dataSchema);


// ---------------- ROUTES ----------------

// GET all
app.get('/datas', async (req, res) => {
    const all = await Data.find();
    res.json(all);
});

// POST new
app.post('/datas', async (req, res) => {
    const data = new Data(req.body);
    await data.save();
    res.json(data);
});

// PUT update (replace)
app.put('/datas/:id', async (req, res) => {
    const updated = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});


// ⭐⭐⭐ THIS IS WHERE YOU ADD PATCH ⭐⭐⭐
// PATCH update (only selected fields)
app.patch('/datas/:id', async (req, res) => {
    try {
        const updated = await Data.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// DELETE
app.delete('/datas/:id', async (req, res) => {
    await Data.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
});


// ---------------- START SERVER ----------------
app.listen(2004, () => {
    console.log("API running on port 2004");
});