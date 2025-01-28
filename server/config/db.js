const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Disable strict query mode (optional, depends on your MongoDB version)
    mongoose.set('strictQuery', false);

    // Connect to MongoDB using the URI from the environment variables
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true, // Recommended for avoiding deprecation warnings
      useUnifiedTopology: true, // Recommended for connection management
    });

    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection failed:', error.message); // Clear error message
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
