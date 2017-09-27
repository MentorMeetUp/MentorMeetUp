import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home</Link>
    </li>
    <li className={window.location.pathname === "/form" ? "active" : ""}>
      <Link to="/form">Sign Up</Link>
    </li>
    <li className={window.location.pathname === "/contact" ? "active" : ""}>
      <Link to="/contact">Contact</Link>
    </li>
    <li className={window.location.pathname === "/contact" ? "active" : ""}>
      <Link to="/login">Log In</Link>
    </li>
    {/* <li
      className={window.location.pathname === "/contact/learn" ? "active" : ""}
    >
      <Link to="/contact/learn">Learn</Link>
    </li> */}
  </ul>;

export default Navbar;