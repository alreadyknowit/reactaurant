import React, { Component } from "react";
import { Table } from "reactstrap";
class ProductList extends Component {
  render() {
    return (
      <div>
        <h3 style={{ color: this.props.info.color }}>
          {this.props.info.title}

          <Table className="table-condensed">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Available Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((product) => {
                return (
                  <tr>
                    <th scope="row">{product.id}</th>
                    <td>{product.productName}</td>
                    <td>{product.quantityPerUnit}</td>
                    <td>{product.unitPrice}</td>
                    <td>{product.unitsInStock}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </h3>
      </div>
    );
  }
}

export default ProductList;
