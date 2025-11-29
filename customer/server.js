const express = require('express');
const connectDB = require('./config/db');
const dataRoutes = require('./routes/dataRoutes');

const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use('/datas', dataRoutes);

// Root route
app.get('/', (req, res) => res.send('API is running'));

// Start server
const PORT = process.env.PORT || 2004;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
