import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  NavbarText,
  Button
} from "reactstrap";

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
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Cart( {this.props.cart.length} )
                </DropdownToggle>
                <DropdownMenu right>
                  {this.props.cart.map((item) => {
                    return (
                      <DropdownItem key={item.product.id}>
                        {item.product.productName}({item.quantity}){" "}
                      </DropdownItem>
                    );
                  })}

                  <DropdownItem divider />
                  <DropdownItem>
                    <Button
                      color="danger"
                      onClick={()=>console.log("")}
                    >
                      x
                    </Button>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText></NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
