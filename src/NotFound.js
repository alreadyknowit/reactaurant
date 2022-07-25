import React, { Component } from "react";
import { Container } from "reactstrap";
class NotFound extends Component {
  render() {
    return (
      <div>
        <Container className="h-100 d-flex align-items-center justify-content-center">
          404 Not Found!
        </Container>
      </div>
    );
  }
}

export default NotFound;
