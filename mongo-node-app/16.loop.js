import mongoose from 'mongoose';
const dbURI = 'mongodb://127.0.0.1:27017/employees';

mongoose.connect(dbURI)
  .then(() => console.log('Connected to local MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const employeeSchema = new mongoose.Schema({
  EMPCode:{type:String,unique:true},
  name: String,
  age: Number,
  role: String,
  contactNumber: Number
});

const Employees = mongoose.model('Employees', employeeSchema);

async function createAndSaveEmployees() 
{
  const newDoc = new Employees({
    EMPCode:'E00001',
    name: 'Ram',
    age: 30,
    role: 'Software Engineer',
    contactNumber: 3698520147
  });

  await newDoc.save();
  console.log('Employees saved:', newDoc);
}

// createAndSaveEmployees()
// mongoose.disconnect());

// async function findAndUpdateEmployee(_id, updateData) {
//     try{
//         const employee = await Employees.findOne({ _id });
//         if (!employee) {
//             console.log('Employee not found');
//             return;
//         }
//         console.log('Before update:', employee);
//         for (const key in updateData) {
//             if (key !== '_id' && key !== 'EMPCode') {
            
//                 employee[key] = updateData[key];
//             }
//         }
//         const updatedEmployee = await employee.save();
//         console.log('After update:', updatedEmployee);
//     } catch (err) {
//         console.error('Error updating employee:', err);
//     }
// }

// async function run() {
//   await createAndSaveEmployees();
//   await findAndUpdateEmployee('6926f5bd1e96ce24285ca52f', {name:'Sita',age: 31});
//   mongoose.disconnect();
// }
// run();

async function findOneAndDeleteEmployee(EMPCode, deleteData) {
    try {
        const deletedEmployee = await Employees.findOneAndDelete({ EMPCode});
        if (deletedEmployee) {
            console.log('Deleted employee found', deletedEmployee);
        } else {
            console.log('Deleted employee not found');
        }
    } catch (err) {
        console.error('Error deleting employee:', err);
    }
}
async function run() {
  await createAndSaveEmployees();
await findOneAndDeleteEmployee('E00002',{contactNumber: 3698520147});
console.log('Contact Number deleted successfully');
mongoose.disconnect();
}
run();