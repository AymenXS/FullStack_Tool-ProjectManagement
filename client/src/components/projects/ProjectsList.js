import List from '../../assets/wrappers/List';
import { changeType, editActive, openModal, setProject } from '../../features/modalSlice';
import { deleteProject } from '../../features/projectsSlice';
import { useDispatch } from 'react-redux';

const ProjectList = ({ _id, label, starting_date, ending_date, description }) => {
  const dispatch = useDispatch();

  const edit = (_id, label, starting_date, ending_date, description) => {
    dispatch(editActive({ _id, label, starting_date, ending_date, description }));
    dispatch(openModal());
  };

  const localDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <List onClick={() => {
      dispatch(setProject(_id))
      dispatch(changeType('Task'))
      }}>
      <span id="label">{label}</span>
      <span id="description">{description}</span>
      <span id="starting-date">
        <i className="bi bi-calendar-check me-1"></i>
        {localDate(starting_date)}
      </span>
      <span id="ending-date">
        <i className="bi bi-calendar-check me-1"></i>
        {localDate(ending_date)}
      </span>
      <span id="actions">
        <i
          className="bi bi-pen-fill me-3"
          onClick={() => {
            edit(_id, label, starting_date, ending_date, description);
          }}
        ></i>
        <i className="bi bi-trash2-fill " onClick={() => dispatch(deleteProject(_id))}></i>
      </span>
    </List>
  );
};

export default ProjectList;
