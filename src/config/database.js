const mongoose = require('mongoose');
const User = require('../models/userModel');

const connectDB = async () => {
  try {
    await mongoose.connect('mongosh mongodb://root:0GWThQNB5N3EPRlt8IHtRnKl@172.21.125.216:27017');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
module.exports = connectDB;