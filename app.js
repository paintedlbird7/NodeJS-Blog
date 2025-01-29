// Load environment variables from the .env file
require('dotenv').config();

const express = require('express'); // Import the Express framework
const expressLayout = require('express-ejs-layouts'); // Import express-ejs-layouts for layout management
const connectDB = require('./server/config/db'); // Import the database connection function

const app = express(); // Initialize the Express app
const PORT = process.env.PORT || 5001; // Set the port from the environment variable or use 5001 as default

// Debugging: Log the MONGO_URI to verify it's being loaded correctly
console.log('MONGO_URI:', process.env.MONGO_URI);

// Connect to the database
// Uncomment the connectDB() line once MONGO_URI issue is resolved
connectDB(); // Connects to MongoDB using the URI from the .env file

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set up the templating engine
app.use(expressLayout); // Use express-ejs-layouts for layout support
app.set('layout', './layouts/main'); // Specify the main layout file
app.set('view engine', 'ejs'); // Set EJS as the templating engine

// Define the main route using the router in the specified file
app.use('/', require('./server/routes/main'));

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`); // Log the active port to the console
});
