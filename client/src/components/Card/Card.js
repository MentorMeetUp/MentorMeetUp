import React from "react";
// import {Grid} from "react-bootstrap";
// import {Row} from "react-bootstrap";
// import {Col} from "react-bootstrap";
import {Thumbnail} from "react-bootstrap";
import {Button} from "react-bootstrap";



const Card = props => (
  // <Grid>
  //   <Row>
  //   <Col xs={6} md={4} lg={3}>
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
      </ul>
        <p>
          {/* <Button bsStyle="primary" bsSize="xsmall">free</Button>*/}   <Button bsStyle="primary" bsSize="xsmall">Contact</Button>
        </p>
      </Thumbnail>
  //   </Col>
  //   </Row>
  // </Grid>
);





// const UserCard = props => (
//   <div className="card">
//     <div className="img-container">
//       <img alt={props.name} src={props.image} />
//     </div>
//     <div className="content">
//       <ul>
//         <li>
//           <h4>Name:</h4> {props.name}
//         </li>
//         <li>
//           <strong>Occupation:</strong> {props.occupation}
//         </li>
//         <li>
//           <strong>Location:</strong> {props.location}
//         </li>
//       </ul>
//     </div>
//   </div>
    
// );

export default Card;
