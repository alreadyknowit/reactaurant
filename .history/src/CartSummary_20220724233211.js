import React, { Component } from "react";

import {
  DropdownMenu,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  Button,
} from "reactstrap";

class CartSummary extends Component {
  render() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Cart( {this.props.cart.length} )
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.cart.map((item) => {
              return (
                <DropdownItem key={item.product.id}>
                  {item.product.productName} ({item.quantity})
                </DropdownItem>
              );
            })}

            <DropdownItem divider />
            <DropdownItem>
              <Button color="danger" onClick={() => this.props.clearProducts()}>
                Clear
              </Button>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
}

export default CartSummary;
