import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Tasks App
        </NavLink>

        <ul className="navbar-nav ml-auto">
          <NavItems />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
