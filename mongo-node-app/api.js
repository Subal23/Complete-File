const mongoose= require('mongoose');
const express= require('express');
const app =express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/Personal')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
    app.listen(2004, () => console.log('API running on port 2004'));

// const dataSchema = new mongoose.Schema({
//     rollId:{type:String, unique:true},
//     name: { type: String },
//     age: { type: Number },
//     dob:{type:String},
//     job:{type:String},
//     gender:{type:String},
//     department:{type:String},
//     contactNumber:{type:Number}},
//     {strict:false});
// const Datas = mongoose.model('Data', dataSchema);
// const app = express();
// app.use(express.json());

// app.post('/datas', async (req, res) => {
//     try {
//         const datas = await Datas.create(req.body);
//         res.status(201).json({ message: 'Datas created', datas});
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });
// app.listen(2004, () => console.log('API running on port 2004'));

// app.get('/datas', async (req, res) => {
//     try {
//         const datas= await Datas.find({});
//         console.log('Datas found',datas);
//         res.json(datas);
//     }
//     catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// }); 
// app.listen(2004, () => console.log('API running on port 2004'));


// app.delete('/datas/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const result = await Datas.findByIdAndDelete(id);
//     if (!result) {
//       return res.status(404).json({ message: 'Data not found' });
//     }
//     res.json({ message: 'Deleted successfully', deletedData: result });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(2004, () => console.log('API running on port 2004'));

// app.put('/datas/:id', async (req, res) => {
//     try{
//         const id= req.params.id;
//         const updatedDatas = await Datas.findByIdAndUpdate(id,req.body,{new: true});
//         if (!updatedDatas){
//             return res.status(404).json({message:'Data not found'});
//         }
//         else{
//             res.json({message:'Updated Successfully'});
//         }
//     } catch (error){
//         res.status(500).json({error: error.message});
//     }
// });
// app.listen(2004,()=> console.log('API running on port 2004'));

// app.patch('/datas/:id', async (req, res) => {
//   try {
//     const id= req.params.id;
//     const updated = await Employee.findByIdAndUpdate(
//       id,
//       {$set:req.body},
//       { new: true }
//     );

//     res.json({ message: "Updated Successfully", updatedData: updated });

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
// app.listen(2004,()=> console.log('API running on port 2004'));