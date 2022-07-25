import React, { Component } from "react";
import { Table, Button,Badge } from "reactstrap";
import { AiFillDelete } from "react-icons/ai";

class CartList extends Component {
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Available Amount</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item) => {
              return (
                <tr key={item.product.id}>
                  <th scope="row" key={item.id}>
                    {item.id}
                  </th>
                  <td>{item.product.productName}</td>
                  <td>{item.product.quantityPerUnit}</td>
                  <td>{item.product.unitPrice}</td>
                  <td>{item.product.unitsInStock}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button
                      color="danger"
                      onClick={() => this.props.removeSingleItem(item)}
                    >
                      <AiFillDelete size="16px"></AiFillDelete>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Badge color="danger" onClick={() => this.props.clearProducts()}>
          Clear All<AiFillDelete size="18px"></AiFillDelete>
        </Badge>
      </div>
    );
  }
}

export default CartList;
