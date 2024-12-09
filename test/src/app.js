// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db/connection'); // Ensure DB connection is correctly set up
const bookRoutes = require('./routes/bookRoutes'); // Correct route import
const staffRoutes = require('./routes/staffRoutes'); // Ensure this is included
const memberRoutes = require('./routes/memberRoutes');

const app = express();

connectDB();  // Ensure this connects to MongoDB

app.use(cors());
app.use(bodyParser.json());

//Ensures the POST staff,book,member route is available
app.use('/api', bookRoutes);
app.use('/api', staffRoutes);
app.use('/api', memberRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
