import React, { Component } from 'react';
import { Table } from 'reactstrap';

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
                      <tr key={item.id}>
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
                            color="primary"
                            onClick={() => this.props.removeSingleItem(item)}
                          >
                            +
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>

                </Table>
            </div>
        );
    }
}

export default CartList;