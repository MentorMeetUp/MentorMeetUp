import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";


class Login extends Component {
  // Setting the component's initial state
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    API.signIn(this.state.email)
      .then(res => console.log(res.data))

    if (!this.state.email || !this.state.password) {
      alert("Please fill out all fields");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password`
      );
    } else {
      // alert(`Hello ${this.state.firstName} ${this.state.lastName}`);

      this.setState({
        email: this.state.email,
        password: "qwerty"
      });
    }

    // this.setState({
    //   password: ""
    // });
  };

  // getEmail = user => {
  //   API.signIn(user)
  //     .then(res => console.log(res.data))
  //     if (this.state.email===user.email) {
  //      <Link to={'results/${this.state.email}'} className="btn btn-default">
  //     Sign In!
  //   </Link>
  //     }
  //     else {
  //       alert("WRONG!!")
  //     }
  //     // .catch(err => console.log(err));
  // };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Welcome.  Sign in! {this.state.email}
        </p>
        <form className="form">
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button className="btn btn-primary btn-md" onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;

