import React from "react";
import Task from "../../Task";

const Tasks = ({ tasks }) => {
  return (
    <div className="container">
      <table className="table table-dark" style={{ marginTop: "30px" }}>
        <thead>
          <tr className="text-info">
            <th scope="col">Title</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task, i) => {
              return <Task key={task.id} title={task.title} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
