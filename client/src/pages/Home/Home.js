import React, { Component } from "react";
import { Link } from "react-router-dom";


class Home extends Component {
  // Setting the component's initial state
  state = {
    search: ""
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
    if (!this.state.search) {
      alert("Please enter a skill you'd like to search for");
    } else {
      alert(`You searched for: ${this.state.search}`);

      this.setState({
        search: ""
        
      });
    }

  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <h1>
          Home Page
        </h1>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6"> 
            <form className="form">
            <label for="search">Search for a Skill You'd Like to Learn</label>
              <div class="input-group">
              <input
                className="form-control"
                value={this.state.search}
                name="search"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Search for a Skill"
              />
              <span>
              <Link to="/results"><button className="btn btn-primary btn-md text-center" /*onClick={this.handleFormSubmit}*/>Submit</button></Link>
                
              </span>
              </div>
            </form>

            {/* <div class="input-group">
              <span class="input-group-addon">$</span>
              <input type="text" class="form-control">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">Button</button>
              </span>
            </div>           */}

          </div>
        </div>
      </div>  
    );
  }
}


export default Home;
