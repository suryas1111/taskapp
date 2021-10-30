import React from "react";
import Card from "react-bootstrap/Card";
import "./AddTaskCard.css";
import Button from "react-bootstrap/Button";

const AddTaskCard = (props) => {
  return (
    <div className="Container">
      <Card
        style={{
          width: "18rem",
          borderRadius: "4%",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <Card.Body className="card-body">
          <Card.Title>You have no Task.</Card.Title>
          <Button onClick={props.addTask}>+ New Task</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddTaskCard;
