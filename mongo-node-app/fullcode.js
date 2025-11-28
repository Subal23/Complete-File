const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// ----------------------
// MongoDB Connection
// ----------------------
const dbURI = 'mongodb://127.0.0.1:27017/employeesDB';

mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// ----------------------
// Schema
// ----------------------
const employeeSchema = new mongoose.Schema({
  rollId: String,
  name: String,
  age: Number,
  department: String,
  dob: String,
  gender: String,
  contactNumber: String,
  job: String
});

const Employee = mongoose.model('Employee', employeeSchema);

// ----------------------
// CREATE (POST)
// ----------------------
app.post('/datas', async (req, res) => {
  try {
    const newEmp = new Employee(req.body);
    const saved = await newEmp.save();
    res.json({ message: "Data Inserted", data: saved });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ----------------------
// READ ALL (GET)
// ----------------------
app.get('/datas', async (req, res) => {
  const all = await Employee.find();
  res.json(all);
});

// ----------------------
// READ SINGLE (GET)
// ----------------------
// app.get('/datas/:id', async (req, res) => {
//   const data = await Employee.findById(req.params.id);
//   res.json(data);
// });

// ----------------------
// UPDATE DYNAMICALLY (PATCH)
// ----------------------
app.patch('/datas/:id', async (req, res) => {
  try {
    const updated = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated data
    );

    res.json({ message: "Updated Successfully", updatedData: updated });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ----------------------
// DELETE (DELETE)
// ----------------------
// app.delete('/datas/:id', async (req, res) => {
//   try {
//     await Employee.findByIdAndDelete(req.params.id);
//     res.json({ message: "Deleted Successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// ----------------------
// Start Server
// ----------------------
app.listen(2004, () => {
  console.log("Server running on port 2004");
});
