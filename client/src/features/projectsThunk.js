import axios from 'axios';
import { getAllProjects } from './projectsSlice';

const url = 'http://localhost:3000/projects';

export const getAllProjectsThunk = async (_, thunkAPI) => {
  try {
    const response = await axios.get(url);
    return response.data.data.projects;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
};

export const getProjectThunk = async (projectID, thunkAPI) => {
  try {
    const response = await axios.get(`${url}/${projectID}`);
    return response.data.project;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
};

export const createProjectThunk = async (project, thunkAPI) => {
  try {
    const response = await axios.post(url, project);
    thunkAPI.dispatch(getAllProjects());
    return response.data.projects;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const editProjectThunk = async ({ projectID, project }, thunkAPI) => {
  try {
    const response = await axios.patch(`${url}/${projectID}`, project);
    thunkAPI.dispatch(getAllProjects());
    return response.data.data.projects;
  } catch (error) {
    thunkAPI.rejectWithValue('something went wrong');
  }
};

export const deleteProjectThunk = async (projectID, thunkAPI) => {
  try {
    const response = await axios.delete(`${url}/${projectID}`);
    thunkAPI.dispatch(getAllProjects());
    return response.data.data.projects;
  } catch (error) {
    thunkAPI.rejectWithValue('something went wrong');
  }
};
