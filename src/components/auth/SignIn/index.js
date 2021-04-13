import React from "react";
import { connect } from "react-redux";
import SignInComponent from "./component/SignIn";
import { signIn } from "../../../redux/actions/authActions";

const SignIn = (props) => <SignInComponent {...props} />;

const mapStateToProps = (state) => ({
  uid: state.firebase.auth.uid,
});

const mapDispatchToProps = (disptach) => ({
  signIn: (email, password) => disptach(signIn(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
