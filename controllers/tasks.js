const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');

const getAllTasks = asyncWrapper(async (req, res) => {
  const { id: projectID } = req.params;
  const tasks = await Task.find({ project: projectID });
  res.status(200).json({ status: 'success', data: { tasks } });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(`No Task with id: ${taskID}`, 404);
  }
  res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true, // To return the updated version
    runValidators: true,
  });
  if (!task) {
    return next(`No Task with id: ${taskID}`, 404);
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(`No Task with id: ${taskID}`, 404);
  }
  res.status(200).json({ task });
});

module.exports = { getAllTasks, getTask, createTask, deleteTask, updateTask };
