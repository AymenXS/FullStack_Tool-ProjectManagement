const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const projects = require('./routes/projects');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connecting to Front-End
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

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
