import React from "react";

const UserCard = props => (
  <Grid>
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src="#" alt="User Photo">
        <h3>Users name goes here</h3>
        <p>About me goes here</p>
        <p>
          <Button bsSize="xsmall">free</Button>
          <Button bsSize="xsmall">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    </Row>
  </Grid>
);

export default FriendCard;