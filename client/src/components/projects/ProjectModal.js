import React, { useState } from 'react';
import { Alert, Button, Col, Container, Table } from 'reactstrap';
import CustomModal from '../shared/Modal';

const ProjectModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Container className="mt-5">
      <Col className="d-flex justify-content-end">
        <Button color="primary" onClick={toggleModal}>
          Add Project
        </Button>
        <CustomModal isOpen={modalOpen} toggle={toggleModal}>
          Hello
        </CustomModal>
      </Col>

      <Table borderless className="mt-5">
        <thead>
          <tr>
            <th>Label</th>
            <th>Description</th>
            <th>Started At</th>
            <th>Ended At</th>
            <th>Created At</th>
            <th>Updated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="shadow p-3 mb-5 bg-body-tertiary rounded">
            <th style={{ width: '125px' }} scope="row" className="rounded p-3">
              Label 1
            </th>
            <td className="text-start text-wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Animi, quis.
            </td>
            <td style={{ width: '125px' }}>
              <i class="bi bi-calendar-check me-1"></i>11/04/2023
            </td>
            <td style={{ width: '125px' }}>
              <i class="bi bi-calendar-check me-1"></i>11/04/2023
            </td>
            <td>
              <span className=" badge text-bg-primary">13/10/2023</span>
            </td>
            <td>
              <span className="badge text-bg-warning">13/10/2023</span>
            </td>
            <td className="rounded">
              <i class="bi bi-pen-fill me-3"></i>
              <i class="bi bi-trash2-fill "></i>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ProjectModal;
