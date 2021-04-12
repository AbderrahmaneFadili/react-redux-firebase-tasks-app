import React from "react";
import NavItemsComponent from "./components/NavItems";
import { signOut } from "../../../redux/actions/authActions";
import { connect } from "react-redux";
const NavItems = (props) => <NavItemsComponent {...props} />;

//map state to props
const mapStateToProps = (state) => ({
  uid: state.firebase.auth.uid,
});

//map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavItems);
