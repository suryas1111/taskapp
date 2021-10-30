import React from "react";
import Card from "react-bootstrap/Card";
import "./LastestTaskCard.css";

const LastestTaskCard = (props) => {
  return (
    <div>
      <Card className="latestcardContainer">
        <Card.Body>
          <Card.Title>Task Completed</Card.Title>
          <ul>
            {props.lastestTasks.map((ele) => {
              return (
                <li key={ele._id}>
                  <span className={ele.completed ? "strike" : null}>
                    {ele.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};
export default LastestTaskCard;
