import React from "react";

const AddTask = () => {
  return (
    <div className="container my-5">
      <form autoCapitalize={"off"}>
        <div className="form-group">
          <label htmlFor="txtTask">Add Task</label>
          <input type="text" className="form-control" id="txtTask" />
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
