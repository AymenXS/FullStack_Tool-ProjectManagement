import axios from 'axios';
import { getAllTasks } from './tasksSlice';

const url = 'http://localhost:3000/projects';

export const getAllTasksThunk = async (projectID, thunkAPI) => {
  try {
    const response = await axios.get(`${url}/${projectID}/tasks/`);
    return response.data.data.tasks;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
};

export const getTaskThunk = async ({ projectID, taskID }, thunkAPI) => {
  try {
    const response = await axios.get(`${url}/${projectID}/tasks/${taskID}`);
    return response.data.task;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
};

export const createTaskThunk = async ({ projectID, task }, thunkAPI) => {
  try {
    const response = await axios.post(`${url}/${projectID}/tasks`, task);
    thunkAPI.dispatch(getAllTasks(projectID));
    return response.data.tasks;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const editTaskThunk = async ({ projectID, taskID, task }, thunkAPI) => {
  try {
    const response = await axios.patch(`${url}/${projectID}/tasks/${taskID}`, task);
    thunkAPI.dispatch(getAllTasks(projectID));
    return response.data.data.tasks;
  } catch (error) {
    thunkAPI.rejectWithValue('something went wrong');
  }
};

export const deleteTaskThunk = async ({ projectID, taskID }, thunkAPI) => {
  try {
    const response = await axios.delete(`${url}/${projectID}/tasks/${taskID}`);
    thunkAPI.dispatch(getAllTasks(projectID));
    return response.data.data.tasks;
  } catch (error) {
    thunkAPI.rejectWithValue('something went wrong');
  }
};
