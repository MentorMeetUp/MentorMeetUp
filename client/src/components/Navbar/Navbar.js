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
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <form action="/results" method="post" name="search" className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" className="form-control" id="search-navbar" placeholder="Search" name="Artist"/>
          </div>
          <button type="submit" className="btn btn-primary"><i className="fa fa-search" aria-hidden="true"></i></button>
      </form>   
      <ul className="nav navbar-nav navbar-right">
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
  </div>
</nav>;

export default Navbar;