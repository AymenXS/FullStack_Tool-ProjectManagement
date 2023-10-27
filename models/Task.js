const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  label: String,
  description: String,
  project: { type: Schema.Types.ObjectId, ref: 'Project' }, // To be tackled later!
  status: Boolean,
  starting_date: Date,
  ending_date: Date,
});

module.exports = mongoose.model('Task', TaskSchema);
