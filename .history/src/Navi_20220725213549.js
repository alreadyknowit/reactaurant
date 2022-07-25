import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
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
        <Navbar
          className="d-flex justify-content-between"
          color="light"
          light
          expand="md"
        >
          <div>
            <NavbarBrand href="/">Reactaurant</NavbarBrand>
          </div>

          <div>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="me-auto " navbar>
                <NavItem>
                  <Navlink>
                    <AiFillFileAdd
                      size="35px"
                      style={{ display: "grid" }}
                    ></AiFillFileAdd>
                  </Navlink>
                  <Link to="form"></Link>
                </NavItem>

                <CartSummary
                  removeSingleItem={this.props.removeSingleItem}
                  cart={this.props.cart}
                  clearProducts={this.props.clearProducts}
                ></CartSummary>
              </Nav>
              <NavbarText></NavbarText>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
