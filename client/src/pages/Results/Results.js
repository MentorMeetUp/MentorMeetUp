import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Results.css";
import API from "../../utils/API";

class Results extends Component {
  state = {
    skill: {}
  };
 
  componentDidMount() {
    API.getUserSkill(this.props.match.params.skill)
      .then(res => console.log({ skill: res.data }))
      .catch(err => console.log(err));
  }
  	render() {
	    return (
			<div className="container">
			    <h1>Results Page</h1>
			</div>                  
		);
	}
}                 

export default Results;