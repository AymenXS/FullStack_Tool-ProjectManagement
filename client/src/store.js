import { configureStore } from '@reduxjs/toolkit';

import projectsReducer from './features/projectsSlice';
import modalReducer from './features/modalSlice';
import tasksReducer from './features/tasksSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    tasks: tasksReducer,
    modal: modalReducer,
  },
});

export default store;
