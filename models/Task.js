  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const TaskSchema = new Schema({
    label: String,
    description: String,
    project: { type: Schema.Types.ObjectId, ref: 'Project', required: true }, // To be tackled later!
    status: Boolean,
    starting_date: { type: Date, required: true },
    ending_date: { type: Date, required: true },
  });

  module.exports = mongoose.model('Task', TaskSchema);
