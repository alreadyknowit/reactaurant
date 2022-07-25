import React, { Component } from "react";

import {
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  Button,
  Col,
  Badge,
  Container,
} from "reactstrap";

class CartSummary extends Component {
  render() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Cart <Badge color="success">{this.props.cart.length} </Badge>
          </DropdownToggle>
          <DropdownMenu end>
            {this.props.cart.length > 0 ? (
              <Container>
                {this.props.cart.map((item) => {
                  return (
                    <DropdownItem key={item.product.id}>
                      <Badge
                        color="danger"
                        onClick={() => this.props.removeSingleItem(item)}
                      >
                        {" "}
                        x
                      </Badge>
                      {item.product.productName} {""}
                      <Badge color="success"> {item.quantity}</Badge>
                    </DropdownItem>
                  );
                })}

                <DropdownItem divider />

                <DropdownItem className="d-flex ">
                  <Col>
                    <Badge
                      color="danger"
                      onClick={() => this.props.clearProducts()}
                    >
                      Clear
                    </Badge>
                    <Badge
                      color="danger"
                      onClick={() => this.props.clearProducts()}
                    >
                      Clear
                    </Badge>
                  </Col>
                </DropdownItem>
              </Container>
            ) : (
              <div></div>
            )}
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
}

export default CartSummary;
