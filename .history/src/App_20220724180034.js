import "./App.css";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Row, Container } from "reactstrap";
import React, { Component } from "react";

class App extends Component {
  state = {
    currentCategory: null,
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch("http://localhost:3004/products?categoryId=" + currentCategory.categoryId)
      .then((res) => res.json())
      .then((data) => this.setState({ products: data }));
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category });
  };
  render() {
    let categoryInfo = { title: "Categories", color: "green" };
    let productInfo = { title: "Products", color: "red" };
    return (
      <div className="App">
        <Container>
          <Row>
            <Navi></Navi>
          </Row>
          <Row>
            <Col xs="4">
              <CategoryList
                onClickColor={this.state.color}
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              ></CategoryList>
            </Col>
            <Col xs="8">
              <ProductList
                products={this.state.products}
                info={productInfo}
              ></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
