const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  rollId: { type: String, unique: true },
  name: String,
  age: Number,
  dob: String,
  job: String,
  gender: String,
  department: String,
  contactNumber: Number
}, { strict: false });

module.exports = mongoose.model('Data', dataSchema);
