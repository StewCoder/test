const mongoose = require('mongoose');

/**
 * Connects to the MongoDB database using mongoose.
 * @async
 * @function connectDB
 * @throws {Error} If the connection fails, an error is thrown with a descriptive message.
 * @description This function attempts to connect to the MongoDB database at the specified URL (mongodb://localhost:27017/digitalLibrary).
 * If the connection is successful, a success message is logged to the console. If an error occurs, it logs the error message.
 * 
 * @example
 * connectDB();
 */
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/digitalLibrary', {  // Replace with your DB connection string
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
};

module.exports = connectDB;
