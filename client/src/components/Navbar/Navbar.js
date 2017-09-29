import React from "react";
import { Link } from "react-router-dom";
// import Modal from "./components/Modal";

const Navbar = () =>
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">
        MentorMeetUp
      </Link>
    </div>
    <ul className="nav navbar-nav">
      <li
        className={
          window.location.pathname === "/" ||
          window.location.pathname === "/home"
            ? "active"
            : ""
        }
      >
        <Link to="/">Home</Link>
      </li>
      <li className={window.location.pathname === "/form" ? "active" : ""}>
        <Link to="/form">Sign Up</Link>
      </li>
      <li className={window.location.pathname === "/login" ? "active" : ""}>
        <Link to="/login">Log In</Link>
      </li>
    </ul>
  </div>
</nav>;

{/* <form action="/review/" method="post" name="search" class="navbar-form navbar-left search-fix" role="search">
<div class="form-group">
  <input type="text" class="form-control artist-input" id="search-navbar" placeholder="Search" name="Artist">
</div>
<button type="submit" class="btn btn-default select-artist"><i class="fa fa-search" aria-hidden="true"></i></button>
</form> */}

export default Navbar;