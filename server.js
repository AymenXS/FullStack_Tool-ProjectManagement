const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Define routes and handle database operations here

// Start the server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
