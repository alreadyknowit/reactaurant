import React, { Component } from "react";
import { AiOutlineShoppingCart, AiFillDelete } from "react-icons/ai";
import {
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
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
            <AiOutlineShoppingCart
              size="24px"
              color="green"
            ></AiOutlineShoppingCart>

            <Badge color="success">{this.props.cart.length} </Badge>
          </DropdownToggle>
          <DropdownMenu end>
            {this.props.cart.length > 0 ? (
              <Container>
                {this.props.cart.map((item) => {
                  return (
                    <DropdownItem key={item.product.id}>
                      <Col className="d-flex justify-content-between">
                      <Badge
                        color="danger"
                        onClick={() => this.props.removeSingleItem(item)}
                      >
                        x
                      </Badge>
                      {item.product.productName} {"  "}
                      <Badge color="success"> {item.quantity}</Badge>
                      </Col>
                    </DropdownItem>
                  );
                })}

                <DropdownItem divider />

                <DropdownItem className="d-flex justify-content-center ">
                  <Col className="d-flex justify-content-around">
                    <Badge
                      color="primary"
                      onClick={() => this.props.clearProducts()}
                    >
                      <AiOutlineShoppingCart
                        size="18px"
                      ></AiOutlineShoppingCart>
                    </Badge>
                    <Badge
                      color="danger"
                      onClick={() => this.props.clearProducts()}
                    >
                      <AiFillDelete size="18px"></AiFillDelete>
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
