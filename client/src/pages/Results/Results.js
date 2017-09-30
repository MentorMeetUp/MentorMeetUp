import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Results.css";
import API from "../../utils/API";
// import Card from "../../components/Card";

class Results extends Component {
  state = {
    skill: []
  };

  componentDidMount() {
    this.loadResults();
  }

  loadResults = () => {
    API.getUserSkill(this.props.match.params.skill)
    .then(res => this.setState({ skill: res.data }))
    .catch(err => console.log(err));
  };

  	render() {
	    return (
			<div className="container">
              {this.state.skill.length ? (
                <div>
                {this.state.skill.map(result => (
                  <div>               
                      <strong>
                        {result.city} by {result.email}
                      </strong>
                  </div>
                ))}
                </div>
            ) : (
              <h3>No Results to Display</h3>
            )}
			</div>                  
		);
	}
}



// class Results extends Component {
//   state = {
//     skill: {}
//   };
 
//   componentDidMount() {
//     API.getUserSkill(this.props.match.params.skill)
//       .then(res => console.log({ skill: res.data }))
//       .catch(err => console.log(err));
//   }
  

//   	render() {
// 	    return (
// 			<div className="container">
// 			    <h1>Results Page  </h1>
//           <Card />
// 			</div>                  
// 		);
// 	}
// }                 

export default Results;