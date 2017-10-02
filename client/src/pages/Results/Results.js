import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Results.css";
import API from "../../utils/API";
import Card from "../../components/Card";
import {Grid} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

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
          <Grid>
            <Row>
              <Col xs={6} md={4} lg={3}>
              {this.state.skill.length ? (
                <div>
                {this.state.skill.map(result => (
                  <Card
                    key={result.id}
                    firstName={result.firstName}
                    lastName={result.lastName}
                    photo={result.photo}
                    city={result.city}
                    state={result.state}
                    skill={result.skill1} 
                  />
                ))}
                </div>
            ) : (
              <h3>No mentors for that skill yet!</h3>
            )}
            </Col>
          </Row>
        </Grid>
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