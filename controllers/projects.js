const Project = require('../models/Project');
const asyncWrapper = require('../middleware/async');

const getAllProjects = asyncWrapper(async (req, res) => {
  const projects = await Project.find({});
  res.status(200).json({ status: 'success', data: { projects } });
});

const getProject = asyncWrapper(async (req, res, next) => {
  const { id: projectID } = req.params;
  const project = await Project.findOne({ _id: projectID });
  if (!project) {
    return next(`No Project with id: ${projectID}`, 404);
  }
  res.status(200).json({ project });
});

const createProject = asyncWrapper(async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json({ project });
});

const updateProject = asyncWrapper(async (req, res) => {
  const { id: projectID } = req.params;
  const project = await Project.findOneAndUpdate({ _id: projectID }, req.body, {
    new: true, // To return the updated version
    runValidators: true, // Ensure it runs during update; by default it runs on "Model.create()" without specifying it
  });
  if (!project) {
    return next(`No Task with id: ${projectID}`, 404);
  }
  res.status(200).json({ project });
});

const deleteProject = asyncWrapper(async (req, res) => {
  const { id: projectID } = req.params;
  const project = await Project.findOneAndDelete({ _id: projectID });
  if (!project) {
    return next(`No Task with id: ${projectID}`, 404);
  }
  res.status(200).json({ project });
});

module.exports = { getAllProjects, getProject, createProject, deleteProject, updateProject };
