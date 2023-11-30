const express = require('express');
const router = express.Router();

const {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require('../controllers/tasks');

router.route('/:projectID/tasks').get(getAllTasks).post(createTask);
router.route('/:projectID/tasks/:taskID').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
