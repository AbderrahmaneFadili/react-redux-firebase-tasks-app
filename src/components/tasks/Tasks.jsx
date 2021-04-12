import React from "react";

const Tasks = () => {
  return (
    <div className="container">
      <table className="table table-dark" style={{ marginTop: "30px" }}>
        <thead>
          <tr className="text-info">
            <th scope="col">Tasks</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="col">Tasks</td>
            <td scope="col">Status</td>
            <td scope="col">Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
