import React from "react";
import Card from "react-bootstrap/Card";
import "./TaskCompletedCard.css";

const TaskCompletedCard = (props) => {
  return (
    <div>
      <Card className="taskDonecardContainer">
        <Card.Body>
          <Card.Title>Task Completed</Card.Title>
          <Card.Text>
            <span className="taskDone">{props.taskCompleted}</span>
            <span className="totalTask">/ {props.totalTask}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default TaskCompletedCard;
