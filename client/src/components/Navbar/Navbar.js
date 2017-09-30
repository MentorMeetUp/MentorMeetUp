import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Modal from "./components/Modal";

<<<<<<< HEAD
class Navbar extends Component {
  // Setting the component's initial state
  state = {
    skill: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if (!this.state.skill) {
      alert("Please enter a skill you'd like to search for");
    } else {
      alert(`You searched for: ${this.state.skill}`);

      this.setState({
        skill: ""
        
      });
    }

  };


  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <strong>MentorMeetUp</strong>
            </Link>
=======
const Navbar = () =>
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">
        <strong>Mentor Me</strong>
      </Link>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <form action="/results" method="post" name="search" className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" className="form-control" id="search-navbar" placeholder="Search" name="Artist"/>
>>>>>>> 49834f53169a11ecb2351d73949e5ee9c5ff3b62
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <form className="navbar-form navbar-left">
            <div className="form-group">
              <input
                className="form-control"
                value={this.state.skill}
                name="skill"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Search for a Skill"
              />
            </div>
              <Link to={`/results/${this.state.skill}`}>
                <button type="submit" className="btn btn-primary"><i className="fa fa-search" aria-hidden="true"></i></button>
              </Link>
          </form>

            {/* <form action="/results" method="post" name="search" className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" id="search-navbar" placeholder="Search" name="Artist"/>
                </div>
                <button type="submit" className="btn btn-primary"><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>    */}
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
      </nav>
    )
  }
}
export default Navbar;