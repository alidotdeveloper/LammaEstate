const mongoose = require('mongoose');
require('dotenv').config()
const connectDB = async () => {`        1`
  try {
    await mongoose.connect(process.env.URI);
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas:', err);
    process.exit(1); 
  }
};

module.exports = connectDB;
