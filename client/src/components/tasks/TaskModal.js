import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import CustomModal from '../shared/Modal';

const TaskModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic (Redux action, API call, etc.)
    toggleModal();
  };

  return (
    <div>
      <Button color="primary" onClick={toggleModal}>
        Add Task
      </Button>
      <CustomModal isOpen={modalOpen} toggle={toggleModal}>
        <Form onSubmit={handleFormSubmit}>
          {/* Form fields for adding a task */}
        </Form>
      </CustomModal>
    </div>
  );
};

export default TaskModal;