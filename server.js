const express = require('express');
const app = express();
const projects = require('./routes/projects');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const PORT = 3000;

// Middleware
// app.use(express.static('./public'))
app.use(express.json());

// Routes
app.use('/projects', projects);
app.use('/projects/:id/tasks', tasks);

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
