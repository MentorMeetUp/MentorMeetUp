import React from "react";
// import {Grid} from "react-bootstrap";
// import {Row} from "react-bootstrap";
// import {Col} from "react-bootstrap";
import {Thumbnail} from "react-bootstrap";
import {Button} from "react-bootstrap";


const Card = props => (
  <div>
      <Thumbnail src={props.photo} alt="User Photo">
      <ul>
        <li>
          <strong>Name:</strong> {props.firstName} {props.lastName}
        </li>
        <li>
          <strong>Skill:</strong> {props.skill}
        </li>
        <li>
          <strong>Location:</strong> {props.city}, {props.state}
        </li>
        <li>
          <strong>Cost:</strong> {props.cost1}
        </li><br></br>
        <li>
          <strong>About Me:</strong> {props.aboutMe}. 
        </li>
      </ul>
      <p>
        <Button bsStyle="primary" bsSize="xsmall"><span className="glyphicon glyphicon-envelope"></span> {props.email}</Button>  
      </p>
      </Thumbnail>
  </div>
);

export default Card;
