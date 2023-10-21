import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProjectModal from './ProjectModal';
import { addProject } from '../../actions/projects';
import axios from '../../services/axios';

const ProjectList = () => {
  const projects = useSelector((state) => state.projects);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   axios
  //     .fetchProjects()
  //     .then((response) => {
  //       dispatch(addProject(response.data));
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       setLoading(false);
  //     });
  // }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <ProjectModal />
    </>
  );
};

export default ProjectList;
