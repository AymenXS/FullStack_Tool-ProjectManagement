import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskModal from './TaskModal';
import { addTask } from '../../actions/tasks';
import axios from '../../services/axios';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch tasks from API and update Redux state
    axios.fetchTasks().then((response) => {
      dispatch(addTask(response.data));
    });
  }, [dispatch]);

  return (
    <div>
      {/* Display task table */}
      {/* Add Task Button */}
      <TaskModal />
    </div>
  );
};

export default TaskList;
