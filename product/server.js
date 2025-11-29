const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes'); // correct path

const app = express();

// Middleware
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use('/', productRoutes);

// Start server
const PORT = 2004;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
