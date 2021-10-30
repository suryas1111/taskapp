import React, { useState } from "react";
import "./AddTaskCard.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const AddTaskModal = (props) => {
  const [tname, setTname] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
    setTname(event.target.value);
  };

  const add = (event) => {
    event.preventDefault();
    props.addTask(tname);
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Form>
          <Form.Label>+ New Task</Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control placeholder="Task Name" onChange={handleInput} />
          </Form.Group>
          <Button
            className="Login-button"
            variant="primary"
            type="submit"
            onClick={add}
          >
            + New Task
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddTaskModal;
