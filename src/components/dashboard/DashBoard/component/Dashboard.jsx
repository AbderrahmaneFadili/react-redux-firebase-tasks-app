import React from "react";
import AddTask from "../../../tasks/AddTask";
import Tasks from "../../../tasks/Tasks";
import { Redirect } from "react-router-dom";

const Dashboard = ({ uid }) => {
  console.log("Dashboard : uid", uid);
  if (!uid) {
    return <Redirect to="/signin" />;
  } else {
    return (
      <>
        <AddTask />
        <Tasks />
      </>
    );
  }
};

export default Dashboard;
