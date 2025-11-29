const Data = require('../models/Data');

// CREATE
exports.createData = async (req, res) => {
  try {
    const datas = await Data.create(req.body);
    res.status(201).json({ message: 'Data created', datas });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ALL
exports.getAllData = async (req, res) => {
  try {
    const datas = await Data.find({});
    res.json(datas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getDataById = async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    if (!data) return res.status(404).json({ message: 'Data not found' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE FULL
exports.updateData = async (req, res) => {
  try {
    const updatedData = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedData) return res.status(404).json({ message: 'Data not found' });
    res.json({ message: 'Updated successfully', updatedData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE PARTIAL
exports.patchData = async (req, res) => {
  try {
    const updatedData = await Data.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    if (!updatedData) return res.status(404).json({ message: 'Data not found' });
    res.json({ message: 'Updated successfully', updatedData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteData = async (req, res) => {
  try {
    const deletedData = await Data.findByIdAndDelete(req.params.id);
    if (!deletedData) return res.status(404).json({ message: 'Data not found' });
    res.json({ message: 'Deleted successfully', deletedData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
