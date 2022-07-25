import React, { Component } from "react";
import {AiFillDelete}from "react-icons/ai"
import {
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  Row,
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

                <DropdownItem className="d-flex justify-content-center ">
                  <Col className="d-flex justify-content-around">
                    <Badge
                      color="danger"
                      onClick={() => this.props.clearProducts()}
                    >
                      y
                    </Badge>
                    <Badge
                      color="danger"
                      onClick={() => this.props.clearProducts()}
                    >
                      {" "}
                     <AiFillDelete></AiFillDelete>
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
