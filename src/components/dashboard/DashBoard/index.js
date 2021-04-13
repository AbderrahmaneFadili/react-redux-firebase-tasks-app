import React from "react";
import { connect } from "react-redux";
import DashboardComponent from "./component/Dashboard";

const Dashboard = (props) => <DashboardComponent {...props} />;

//map state to props
const mapStateToProps = (state) => ({
  uid: state.firebase.auth.uid,
});

export default connect(mapStateToProps)(Dashboard);
