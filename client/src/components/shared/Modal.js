import React from 'react';
import Container from '../../assets/wrappers/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, editInactive } from '../../features/modalSlice';
import ProjectModal from '../projects/ProjectModal';
import TaskModal from '../tasks/TaskModal';

const Modal = () => {
  const { type } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const close = () => {
    dispatch(editInactive());
    dispatch(closeModal());
  };

  return (
    <Container>
      <div id="modal">
        {type === 'Project' && <ProjectModal />}
        {type === 'Task' && <TaskModal />}

        <button onClick={close} className="x">
          ❌
        </button>
      </div>
    </Container>
  );
};

export default Modal;
