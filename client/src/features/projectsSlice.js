import { toast } from 'react-toastify';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createProjectThunk,
  deleteProjectThunk,
  editProjectThunk,
  getAllProjectsThunk,
  getProjectThunk,
} from './projectsThunk';

const initialState = {
  projectsList: [],
  status: false,
};

export const getAllProjects = createAsyncThunk('projects/getAllProjects', getAllProjectsThunk);

export const getProject = createAsyncThunk('projects/getProject', getProjectThunk);

export const createProject = createAsyncThunk('projects/createProject', createProjectThunk);

export const editProject = createAsyncThunk('projects/editProject', editProjectThunk);

export const deleteProject = createAsyncThunk('projects/deleteProject', deleteProjectThunk);

const projectsSlice = createSlice({
  name: 'projects',
  initialState,

  extraReducers: (builder) => {
    builder
      // getAllProjects
      .addCase(getAllProjects.pending, (state) => {})
      .addCase(getAllProjects.fulfilled, (state, action) => {
        state.projectsList = action.payload;
      })
      .addCase(getAllProjects.rejected, (state, action) => {})

      // getProject
      .addCase(getProject.pending, (state) => {})
      .addCase(getProject.fulfilled, (state, action) => {
        state.projectsList = action.payload;
      })
      .addCase(getProject.rejected, (state, action) => {})

      // createProject
      .addCase(createProject.pending, (state) => {})
      .addCase(createProject.fulfilled, (state, action) => {
        toast.success('Project Created Successfully');
      })
      .addCase(createProject.rejected, (state, action) => {
        toast.error(action.error.message);
      })

      // editProject
      .addCase(editProject.pending, (state) => {})
      .addCase(editProject.fulfilled, (state, action) => {})
      .addCase(editProject.rejected, (state, action) => {})

      // deleteProject
      .addCase(deleteProject.pending, (state) => {})
      .addCase(deleteProject.fulfilled, (state, action) => {})
      .addCase(deleteProject.rejected, (state, action) => {});
  },
});

export default projectsSlice.reducer;
