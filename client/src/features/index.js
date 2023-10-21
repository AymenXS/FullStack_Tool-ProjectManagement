import { combineReducers } from 'redux';
import projectsReducer from './projectsSlice';
import tasksReducer from './tasksSlice';

const rootReducer = combineReducers({
  projects: projectsReducer,
  tasks: tasksReducer,
});

export default rootReducer;