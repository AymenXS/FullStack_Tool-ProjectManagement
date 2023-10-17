const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Mongoose Schema
const userSchema = new Schema({
  name: String,
  email: String,
});

// Mongoose Model
const User = mongoose.model('User', userSchema);

// Express.js Routes
app.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});