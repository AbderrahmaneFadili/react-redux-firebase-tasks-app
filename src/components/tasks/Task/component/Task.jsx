import React from "react";

const Task = ({ title }) => {
  return (
    <>
      <tr>
        <td scope="col">{title}</td>
        <td scope="col">
          <i style={{ cursor: "pointer" }} className="fas fa-times"></i>
        </td>
      </tr>
    </>
  );
};

export default Task;
