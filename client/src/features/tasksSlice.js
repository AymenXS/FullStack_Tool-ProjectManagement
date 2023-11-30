import { toast } from 'react-toastify';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createTaskThunk,
  deleteTaskThunk,
  editTaskThunk,
  getAllTasksThunk,
  getTaskThunk,
} from './tasksThunk';

const initialState = {
  tasksList: [],
  status: false,
};

export const getAllTasks = createAsyncThunk('tasks/getAllTasks', getAllTasksThunk);

export const getTask = createAsyncThunk('tasks/getTask', getTaskThunk);

export const createTask = createAsyncThunk('tasks/createTask', createTaskThunk);

export const editTask = createAsyncThunk('tasks/editTask', editTaskThunk);

export const deleteTask = createAsyncThunk('tasks/deleteTask', deleteTaskThunk);

const TasksSlice = createSlice({
  name: 'Tasks',
  initialState,

  extraReducers: (builder) => {
    builder
      // getAllTasks
      .addCase(getAllTasks.pending, (state) => {})
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.tasksList = action.payload;
      })
      .addCase(getAllTasks.rejected, (state, action) => {})

      // getTask
      .addCase(getTask.pending, (state) => {})
      .addCase(getTask.fulfilled, (state, action) => {
        state.tasksList = action.payload;
      })
      .addCase(getTask.rejected, (state, action) => {})

      // createTask
      .addCase(createTask.pending, (state) => {})
      .addCase(createTask.fulfilled, (state, action) => {
        toast.success('Task Created Successfully');
      })
      .addCase(createTask.rejected, (state, action) => {
        toast.error(action.error.message);
      })

      // editTask
      .addCase(editTask.pending, (state) => {})
      .addCase(editTask.fulfilled, (state, action) => {})
      .addCase(editTask.rejected, (state, action) => {})

      // deleteTask
      .addCase(deleteTask.pending, (state) => {})
      .addCase(deleteTask.fulfilled, (state, action) => {})
      .addCase(deleteTask.rejected, (state, action) => {});
  },
});

export default TasksSlice.reducer;
