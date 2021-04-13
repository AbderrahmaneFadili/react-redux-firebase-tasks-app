import React from "react";
import AddTaskComponent from "./component/AddTask";
import { addTask } from "../../../redux/actions/tasksActions";
import { connect } from "react-redux";

const AddTask = (props) => <AddTaskComponent {...props} />;

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTask(task)),
});

export default connect(null, mapDispatchToProps)(AddTask);
