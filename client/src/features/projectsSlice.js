import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { createProjectsThunk, deleteProjectsThunk, editProjectsThunk } from './projectsThunk';

const initialState = {
  isEditing: false,
  label: '',
  description: '',
  status: false,
  starting_date: '',
  ending_date: '',
  editProjectId: '',
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
});

export default projectsSlice.reducer;

// export const getAllProjects = createAsyncThunk('projects/createProject', createProjectsThunk);

// export const getProject = createAsyncThunk('projects/createProject', createProjectsThunk);

// export const createProject = createAsyncThunk('projects/createProject', createProjectsThunk);

// export const deleteProject = createAsyncThunk('projects/deleteProject', deleteProjectsThunk);

// export const editProject = createAsyncThunk('projects/editProject', editProjectsThunk);

// const projectsSlice = createSlice({
//   name: 'projects',
//   initialState,
//   // reducers: {
//   //   handleChange: (state, { payload: { name, value } }) => {
//   //     state[name] = value;
//   //   },

//   //   clearValues: () => {
//   //     return {
//   //       ...initialState,
//   //       jobLocation: getUserFromLocalStorage()?.location || '',
//   //     };
//   //   },

//   //   setEditJob: (state, { payload }) => {
//   //     return { ...state, isEditing: true, ...payload };
//   //   },
//   // },
// });

// export const { handleChange, clearValues, setEditJob } = projectsSlice.actions;
