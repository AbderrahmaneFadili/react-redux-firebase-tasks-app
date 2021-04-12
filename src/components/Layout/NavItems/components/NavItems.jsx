import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavItems = () => {
  return (
    <>
      <li className="nav-item">
        <NavLink
          exact
          activeClassName="active"
          className="nav-link"
          to="/signin"
        >
          Sign in
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          activeClassName="active"
          className="nav-link"
          to="/signup"
        >
          Sign Up
        </NavLink>
      </li>
    </>
  );
};

export default NavItems;
