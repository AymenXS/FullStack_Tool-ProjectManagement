import React from 'react';
import Button from '../../assets/wrappers/Button';
import { changeType, openModal } from '../../features/modalSlice';
import { useDispatch } from 'react-redux';

const CreateProjectBtn = () => {
  const dispatch = useDispatch();
  return (
    <nav>
      <Button onClick={() => dispatch(changeType('Project'))}>Projects</Button>
      <Button onClick={() => dispatch(changeType('Task'))}>Tasks</Button>
      <Button onClick={() => dispatch(openModal())}>Create</Button>
    </nav>
  );
};

export default CreateProjectBtn;
