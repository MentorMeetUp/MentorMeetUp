import React, { Component } from "react";
import "./Form.css";
import Footer from "../../components/Footer";
import API from "../../utils/API";


class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    email:"",
    password: "",
    photo: "",
    city: "",
    state: "",
    zipcode: "",
    aboutMe: "",
    skill1: ""
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
    if (!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.city || !this.state.state || !this.state.zipcode) {
      alert("Please fill out all of the required fields");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else {
      API.saveUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        photo: this.state.photo,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
        aboutMe: this.state.aboutMe,
        skill1: this.state.skill1      
      })
        .then(res => res.json(res))
          // this.setState({ users: res.data, firstName: "", lastName: "", email: "", password: "", photo: "", city: "", state: "", zipcode: "", aboutMe: "", skill1: ""}))
        .catch(err => console.log(err));
    }
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="container">
        <div className ="panel">
        <div className="row">
          <div className="col-lg-3"></div>

          <div className="col-lg-6"> 

              <form>
                <label htmlFor="firstName">First Name:</label>
                <input
                  className="form-control"
                  value={this.state.firstName}
                  name="firstName"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="First Name"
                />
                <label htmlFor="lastName">Last Name:</label>
                <input
                  className="form-control"
                  value={this.state.lastName}
                  name="lastName"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Last Name"
                />
                <label htmlFor="email">Email:</label>
                <input
                  className="form-control"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Email"
                />
                <label htmlFor="password">Password:</label>
                <input
                  className="form-control"
                  value={this.state.password}
                  name="password"
                  onChange={this.handleInputChange}
                  type="password"
                  placeholder="Password"
                />
                <label htmlFor="photo">Upload Photo:</label>
                <input
                  className="form-control"
                  value={this.state.photo}
                  name="photo"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Photo"
                />
                <label htmlFor="city">City:</label>
                <input
                  className="form-control"
                  value={this.state.city}
                  name="city"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="City"
                />
                <label htmlFor="state">State:</label>
                <select
                  className="form-control"
                  value={this.state.state}
                  name="state"
                  onChange={this.handleInputChange}
                  type="state"
                  placeholder="State"
                >
                  <option defaultValue="" /*selected disabled*/>Please select:</option>
                  <option>AL</option>
                  <option>AK</option>
                  <option>AZ</option>
                  <option>AR</option>
                  <option>CA</option>
                  <option>CO</option>
                  <option>CT</option>
                  <option>DE</option>
                  <option>FL</option>
                  <option>GA</option>
                  <option>HI</option>
                  <option>ID</option>
                  <option>IL</option>
                  <option>IN</option>
                  <option>IA</option>
                  <option>KS</option>
                  <option>KY</option>
                  <option>LA</option>
                  <option>ME</option>
                  <option>MD</option>
                  <option>MA</option>
                  <option>MI</option>
                  <option>MN</option>
                  <option>MS</option>
                  <option>MO</option>
                  <option>MT</option>
                  <option>NE</option>
                  <option>NV</option>
                  <option>NH</option>
                  <option>NJ</option>
                  <option>NM</option>
                  <option>NY</option>
                  <option>NC</option>
                  <option>ND</option>
                  <option>OH</option>
                  <option>OK</option>
                  <option>OR</option>
                  <option>PA</option>
                  <option>RI</option>
                  <option>SC</option>
                  <option>SD</option>
                  <option>TN</option>
                  <option>TX</option>
                  <option>UT</option>
                  <option>VT</option>
                  <option>VA</option>
                  <option>WA</option>
                  <option>WV</option>
                  <option>WI</option>
                  <option>WY</option>
                </select>
                <label htmlFor="zipcode">Zip Code:</label>
                <input
                  className="form-control"
                  value={this.state.zipcode}
                  name="zipcode"
                  onChange={this.handleInputChange}
                  type="string"
                  placeholder="Zip Code"
                />
                <label htmlFor="aboutMe">About Me:</label>
                <textarea
                  rows = "8"
                  className="form-control"
                  value={this.state.aboutMe}
                  name="aboutMe"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="About Me"
                ></textarea>
                <label htmlFor="skill1">Skills willing to mentor:</label>
                <input
                  className="form-control"
                  value={this.state.skill1}
                  name="skill1"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Skill"
                />
                <button 
                  className="btn btn-primary btn-md" 
                  onClick={this.handleFormSubmit}>Submit</button>
              </form>

          <div className="col-lg-3"></div>
          </div>
        </div>
        </div>
       <Footer />
      </div>
    );
  }
}

export default Form;
