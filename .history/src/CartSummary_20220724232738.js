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
            Cart( {
            console.log(this.props.cart)
            } )
          </DropdownToggle>
          <DropdownMenu right>
            {/* {this.props.cartInfo.map((item) => {
              return (
                <DropdownItem key={item.product.id}>
                  {item.product.productName}({item.quantity})
                </DropdownItem>
              );
            })} */}

            <DropdownItem divider />
            <DropdownItem>
              <Button color="danger" onClick={() => this.props.clearProducts()}>
                x
              </Button>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
}

export default CartSummary;
