import React, { useState } from "react";

const AddTask = (props) => {
  const [title, setTitle] = useState("");

  const handleTitleValue = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title) {
      props.addTask({ title: title, completed: false });
      setTitle("");
    }
  };

  return (
    <div className="container my-5">
      <form autoCapitalize={"off"} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="txtTask">Add Task</label>
          <input
            onChange={handleTitleValue}
            type="text"
            className="form-control"
            id="txtTask"
            value={title}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
