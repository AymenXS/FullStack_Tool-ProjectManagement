const express = require('express');
const router = express.Router();

const {
  getAllProjects,
  getProject,
  createProject,
  deleteProject,
  updateProject,
} = require('../controllers/projects');

router.route('/').get(getAllProjects).post(createProject);
router.route('/:id').get(getProject).patch(updateProject).delete(deleteProject);

module.exports = router;
