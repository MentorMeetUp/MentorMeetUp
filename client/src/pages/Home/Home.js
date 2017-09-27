import React, { Component } from "react";


class Home extends Component {
state = {
  search: "",
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
    if (!this.state.search) {
      alert("Please enter a skill you'd like to search for");
    } else {
      alert(`You searched for: ${this.state.search}`);
    }
  };

 render() {
    return (
    <div>
    <h1>Home Page</h1>
    	<div className="row">
       <div className="col-lg-3"></div>
        <div className="col-lg-6">        
            <form className="form">
              <label for="search">Search for a Skill You'd Like to Learn</label>
              <input
                className="form-control"
                value={this.state.search}
                name="Search for a Skill"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Search for a Skill"
              />
            <button className="btn btn-primary btn-md" onClick={this.handleFormSubmit}>Submit</button>
          <div className="col-lg-3"></div>
    		</form>
        </div>
      	</div>
    </div>
 	)
 }                   
}
export default Home;
