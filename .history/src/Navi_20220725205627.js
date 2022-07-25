import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";
import { AiFillFileAdd } from "react-icons/ai";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Reactaurant</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <AiFillFileAdd size="30px">
                  <Link to="form" />
                </AiFillFileAdd >
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/alreadyknowit">
                  GitHub
                </NavLink>
              </NavItem>

              <CartSummary
                removeSingleItem={this.props.removeSingleItem}
                cart={this.props.cart}
                clearProducts={this.props.clearProducts}
              ></CartSummary>
            </Nav>
            <NavbarText></NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
