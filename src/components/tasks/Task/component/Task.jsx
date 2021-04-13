import React from "react";

const Task = ({ title, id, removeTask }) => {
  //handle remove task
  const handleRemoveTask = () => {
    removeTask(id);
  };
  return (
    <>
      <tr>
        <td scope="col">
          <i
            style={{
              cursor: "pointer",
              marginRight: 10,
              fontSize: "2rem",
              visibility: "hidden",
            }}
            className="fas fa-check"
          ></i>
          {title}
        </td>
        <td scope="col">
          <i
            onClick={handleRemoveTask}
            style={{ cursor: "pointer", fontSize: "2rem" }}
            className="fas fa-times x3"
          ></i>
        </td>
      </tr>
    </>
  );
};

export default Task;
