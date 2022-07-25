import "./App.css";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Row, Container } from "reactstrap";
import React, { Component } from "react";

class App extends Component {
  state = {
    currentCategory: null,
    color: "white",
  };
  changeCategory = (category) => {
    if (( currentCategory !== null && category.id === currentCategory.id))
     this.setState({ color: "red" });
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
              <ProductList info={productInfo}></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
