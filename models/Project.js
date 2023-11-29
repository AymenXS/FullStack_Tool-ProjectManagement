const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  label: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: Boolean, required: true },
  starting_date: { type: Date, required: true },
  ending_date: { type: Date, required: true },
});

module.exports = mongoose.model('Project', ProjectSchema);
