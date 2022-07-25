import React, { Component } from "react";
import { Container, Table, Row, Spinner } from "reactstrap";
class ProductList extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <h3 style={{ color: this.props.info.color }}>
              {this.props.info.title}
            </h3>
          </Row>
          <Row className="justify-content-center">
            {this.props.isLoaded ? (
              <Table hove style={{ fontSize: "12px" }}>
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
                      <tr key={this.props.product.id}>
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
            ) : (
              <Spinner color="success" type="grow"></Spinner>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProductList;
