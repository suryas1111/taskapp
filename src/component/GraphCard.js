import React from "react";
import Card from "react-bootstrap/Card";
import { PieChart, Pie, Cell } from "recharts";
import "./GraphCard.css";

const GraphCard = (props) => {
  // eslint-disable-next-line react/prop-types
  let done = props.taskCompleted;
  // eslint-disable-next-line react/prop-types
  let total = props.totalTask - props.taskCompleted;

  const data = [
    { name: "Group A", value: done },
    { name: "Group B", value: total },
  ];

  const COLORS = ["#3498DB", "#B2BABB"];

  return (
    <div>
      <Card className="graphcardContainer">
        <Card.Body>
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GraphCard;
