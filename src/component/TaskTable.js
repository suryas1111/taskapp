import React from "react";
import Table from "react-bootstrap/Table";
import "./TaskTable.css";
import Card from "react-bootstrap/Card";

const TaskTable = (props) => {
  const getData = () => {
    return props.tasks.map((ele) => {
      return (
        <tr key={ele._id}>
          <td className="checkbox">
            <input
              type="checkbox"
              checked={ele.completed}
              onChange={(e) => {
                props.completed(ele, e.target.checked);
              }}
            />
          </td>
          <td>{ele.name}</td>
          <td>
            <div className="icons">
              <i onClick={() => props.edit(ele._id)} className="fas fa-pen"></i>
              <i
                onClick={() => props.deleteTask(ele._id)}
                className="fas fa-trash"
              ></i>
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <Card className="tableCard">
      <Table responsive className="tableContainer">
        <tbody>{getData()}</tbody>
      </Table>
    </Card>
  );
};

export default TaskTable;
