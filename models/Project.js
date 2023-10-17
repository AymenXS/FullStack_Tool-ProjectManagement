const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  label: String,
  description: String,
  status: Boolean,
  // starting_date: Date,
  // ending_date: Date,
});

module.exports = mongoose.model('Project', ProjectSchema);
