export const addProject = (project) => ({ type: 'ADD_PROJECT', payload: project });
export const updateProject = (projectId) => ({ type: 'UPDATE_PROJECT', payload: projectId });
export const deleteProject = (projectId) => ({ type: 'DELETE_PROJECT', payload: projectId });
