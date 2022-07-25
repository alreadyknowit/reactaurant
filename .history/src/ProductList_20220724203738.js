import React, { Component } from "react";
import { Container, Table, Row, Spinner,Button } from "reactstrap";
class ProductList extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <h3>Products</h3>
          </Row>
          <Row className="justify-content-center">
            {this.props.isLoaded ? (
              <Table hover style={{ fontSize: "12px" }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Available Amount</th>
                    <th>Add chart</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {this.props.products.map((product) => {
                    return (
                      <tr key={product.id}>
                        <th scope="row" key={product.id}>
                          {product.id}{" "}
                        </th>
                        <td>{product.productName}</td>
                        <td>{product.quantityPerUnit}</td>
                        <td>{product.unitPrice}</td>
                        <td>{product.unitsInStock}</td>
                        <td><Button color="primary">+</Button></td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            ) : (
              <Spinner color="primary" type="grow"></Spinner>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProductList;
