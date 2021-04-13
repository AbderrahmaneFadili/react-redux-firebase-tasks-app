import React from "react";
import { connect } from "react-redux";
import TaskComponent from "./component/Task";
import { removeTask } from "../../../redux/actions/tasksActions";

const Task = (props) => <TaskComponent {...props} />;

const mapDispatchToProps = (dispatch) => ({
  removeTask: (taskId) => dispatch(removeTask(taskId)),
});

export default connect(null, mapDispatchToProps)(Task);
