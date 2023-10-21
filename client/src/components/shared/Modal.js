import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

const CustomModal = ({ isOpen, toggle, children }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};

export default CustomModal;