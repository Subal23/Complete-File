const mongoose = require('mongoose');
const dbURI = 'mongodb://127.0.0.1:27017/Personal';
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const dataSchema = new mongoose.Schema({
    rollId: { type: String, unique: true },
    name: { type: String },
    age: { type: Number },
    job:{type:String},
    department: { type: String },
    dob: { type: Date },
    gender: { type: String },
    contactNumber: { type: String }
}, { strict: false });
const Data = mongoose.model('Data', dataSchema);

async function createAndSaveEmployee() {
    try {
        const existing = await Data.findOne({ rollId: '100101031211011' });
        if (existing) {
            console.log('Employee already exists:', existing);
            return existing;
        }
        const newEmployee = new Data({
            rollId: '100101031211011',
            name: 'Subalraj',
            age: 21,
            department: 'Aeronautical Engineering',
            dob: new Date ('04-03-2004'),
            job:'employed',
            gender: 'Male',
            contactNumber: '9876543210'
        });
        await newEmployee.save();
        console.log('Employee saved:', newEmployee);
        return newEmployee;
    } catch (err) {
        console.error('Error creating employee:', err);
    }
}

async function run() {
    await createAndSaveEmployee();
    mongoose.disconnect();
}
run();