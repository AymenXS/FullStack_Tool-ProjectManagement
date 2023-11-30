import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProjectList from './ProjectsList';
import { getAllProjects } from '../../features/projectsSlice';

const Projects = () => {
  const { projectsList } = useSelector((store) => store.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
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
      {projectsList.map((project) => {
        return <ProjectList key={project._id} {...project} />;
      })}
    </main>
  );
};

export default Projects;
