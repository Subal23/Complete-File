const mongoose= require('mongoose');
const express= require('express');
const app =express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/Personal')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
    app.listen(2004, () => console.log('API running on port 2004'));