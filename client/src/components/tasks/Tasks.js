import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TasksList from './TasksList';
import { getAllTasks } from '../../features/tasksSlice';

const Tasks = () => {
  const { tasksList } = useSelector((store) => store.tasks);
  const { project } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks(project));
  }, []);

  return (
    <main className="table">
      <ul className="table-headers">
        <li>Label</li>
        <li>Description</li>
        <li>Started At</li>
        <li>Ended At</li>
        <li>Actions</li>
      </ul>
      {tasksList.map((task) => {
        return <TasksList key={task._id} {...task} />;
      })}
    </main>
  );
};

export default Tasks;
