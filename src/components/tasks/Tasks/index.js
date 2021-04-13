import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import TasksComponent from "./component/Tasks";
import { firestoreConnect } from "react-redux-firebase";

const Tasks = (props) => <TasksComponent {...props} />;

const mapStateToProps = (state) => ({
  tasks: state.firestore.ordered.tasks,
});

export default compose(
  firestoreConnect(() => ["tasks"]),
  connect(mapStateToProps),
)(Tasks);
