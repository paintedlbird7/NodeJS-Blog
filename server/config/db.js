const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,  // Safe to remove if using Mongoose 7+
      useUnifiedTopology: true // Safe to remove if using Mongoose 7+
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Database connection failed: ${err.message}`);
    process.exit(1); // Stop the app if the database connection fails
  }
};

module.exports = connectDB;
