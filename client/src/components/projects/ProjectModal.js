import { useState } from 'react';
import { FaTasks } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { createProject, editProject } from '../../features/projectsSlice';
import { closeModal } from '../../features/modalSlice';

const ProjectModal = () => {
  const dispatch = useDispatch();
  const {
    isEditing,
    _id,
    label: populatedLabel,
    description: populatedDescription,
    starting_date: populatedStartingDate,
    ending_date: populatedEndingDate,
  } = useSelector((store) => store.modal);

  const [label, setLabel] = useState(populatedLabel);
  const [description, setDescription] = useState(populatedDescription);
  const [startingDate, setStartingDate] = useState(populatedStartingDate);
  const [endingDate, setEndingDate] = useState(populatedEndingDate);

  const projectData = {
    label,
    description,
    starting_date: startingDate,
    ending_date: endingDate,
    status: true,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      dispatch(editProject({ projectID: _id, project: projectData }));
      return;
    }

    dispatch(createProject(projectData));
  };

  return (
    <>
      <div className="form-row">
        <span id="modalHeader">
          <FaTasks size={'1.5rem'} />
          {isEditing ? <h5>Edit your project</h5> : <h5>Add new project</h5>}
        </span>
        <p id="small-info">Fill your project attributes</p>
      </div>

      <form action="post" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="label" className="form-label">
            label
          </label>
          <input
            type="text"
            name="label"
            className="form-input"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="description" className="form-label">
            description
          </label>
          <textarea
            name="description"
            className="form-textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="startingDate" className="form-label">
            started at
          </label>
          <input
            type="date"
            name="startingDate"
            id=""
            className="form-input"
            value={isEditing ? startingDate.slice(0, 10) : startingDate}
            onChange={(e) => setStartingDate(e.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="endedAt" className="form-label">
            ended at
          </label>
          <input
            type="date"
            name="endingDate"
            id=""
            className="form-input"
            value={isEditing ? endingDate.slice(0, 10) : endingDate}
            onChange={(e) => setEndingDate(e.target.value)}
          />
        </div>

        <div className="buttons">
          <button type="button" className="btn" id="cancel" onClick={() => dispatch(closeModal())}>
            cancel
          </button>
          <button
            type="submit"
            className="btn"
            id="submit"
            onClick={(e) => {
              handleSubmit(e);
              dispatch(closeModal());
            }}
          >
            save
          </button>
        </div>
      </form>
    </>
  );
};

export default ProjectModal;
