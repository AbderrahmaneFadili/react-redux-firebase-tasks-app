import React from "react";
import SignUpComponent from "./components/SignUp";
import { signUp } from "../../../redux/actions/authActions";
import { connect } from "react-redux";

const SignUp = (props) => <SignUpComponent {...props} />;

const mapStateToProps = ({ firebase }) => ({
  uid: firebase.auth.uid,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (email, password) => dispatch(signUp(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
