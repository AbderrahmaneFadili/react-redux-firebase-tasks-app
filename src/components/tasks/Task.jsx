import React from "react";

const Task = () => {
  return (
    <>
      <tr>
        <th>{task.title}</th>
        <td>{task.completed}</td>
        <td>
          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => handleRemove(task)}
          >
            delete
          </span>
        </td>
      </tr>
    </>
  );
};

export default Task;
