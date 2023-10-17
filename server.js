const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Connect to MongoDB using Mongoose
mongoose.connect(
  'mongodb+srv://Aymen:3C0NbIZrXUkbG8Gn@cluster0.onx0j8e.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Check MongoDB connection
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Middleware to parse JSON data
app.use(express.json());

// Define routes and handle database operations here

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
