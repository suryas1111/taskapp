import React, { useEffect, useState } from "react";
import "./AddTaskCard.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const AddTaskModal = (props) => {
  let value = "";

  const [tname, setTname] = useState(value);

  useEffect(() => {
    setTname(props.task?.name);
  }, [props.task?.name, setTname]);

  const handleInput = (event) => {
    event.preventDefault();
    setTname(event.target.value);
  };

  const edit = (event) => {
    event.preventDefault();
    props.editTask({ ...props.task, name: tname });
  };

  return (
    <Modal
      show={props.show}
      onHide={() => {
        setTname(props.task.name);
        props.onHide();
      }}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Form>
          <Form.Label>+ New Task</Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              placeholder="Task Name"
              onChange={handleInput}
              value={tname || ""}
            />
          </Form.Group>
          <Button
            className="Login-button"
            variant="primary"
            type="submit"
            onClick={edit}
          >
            + Edit Task
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddTaskModal;
