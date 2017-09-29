import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
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
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="container">
        <h1>
          Home Page
        </h1>
        <div className="panel">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6"> 
              <form className="form">
              <label htmlFor="skill">Search for a Skill You'd Like to Learn</label>
                  <input
                    className="form-control"
                    value={this.state.skill}
                    name="skill"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Search for a Skill"
                  />
                    <Link to={`/results/${this.state.skill}`}><button className="btn btn-primary btn-md" /*onClick={this.handleFormSubmit}*/>Submit</button></Link>
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
      </div>  
    );
  }
}

export default Home;






// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import API from "../../utils/API";

// class Home extends Component {
//   // Setting the component's initial state
//   state = {
//     skill: ""
//   };

//   handleInputChange = event => {
//     // Getting the value and name of the input which triggered the change
//     let value = event.target.value;
//     const name = event.target.name;

//     // Updating the input's state
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     event.preventDefault();

//     API.getUserSkill(this.state.skill)
//       .then(res => console.log(res.data))

//     if (!this.state.skill) {
//       alert("Please enter a skill you'd like to search for");
//     } else {
//       // alert(`You searched for: ${this.state.skill}`);

//       this.setState({
//         skill: ""
        
//       });
//     }

//   };

//   render() {
//     // Notice how each input has a `value`, `name`, and `onChange` prop
//     return (
//       <div className="container">
//         <h1>
//           Home Page
//         </h1>
//         <div className="panel">
//           <div className="row">
//             <div className="col-lg-3"></div>
//             <div className="col-lg-6"> 
//               <form className="form">
//               <label htmlFor="skill">Search for a Skill You'd Like to Learn</label>
//                   <input
//                     className="form-control"
//                     value={this.state.skill}
//                     name="skill"
//                     onChange={this.handleInputChange}
//                     type="text"
//                     placeholder="Search for a Skill"
//                   />
//                     <Link to="/results"><button className="btn btn-primary btn-md" onClick={this.handleFormSubmit}>Submit</button></Link>
//               </form>

//               {/* <div class="input-group">
//                 <span class="input-group-addon">$</span>
//                 <input type="text" class="form-control">
//                 <span class="input-group-btn">
//                   <button class="btn btn-default" type="button">Button</button>
//                 </span>
//               </div>           */}

//             </div>
//           </div>
//         </div>
//       </div>  
//     );
//   }
// }


// export default Home;
