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
    isLoaded: false,
    chart:[],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async (category) => {
    let url = "http://localhost:3004/products";
    if (category ) url += "?categoryId=" + category.id;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          isLoaded: true,
          products: data,
        })
      );
  };

  addToChart(product){
    this.state.chart.push(product);
    console.log(this.state.chart)
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category, isLoaded: false });
    this.getProducts(category);
  };
  render() {
    return (
      <div className="App">
        <Container>
            <Navi></Navi>
       
          <Row>
            <Col xs="3">
              <CategoryList
                onClickColor={this.state.color}
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
              ></CategoryList>
            </Col>
            <Col xs="9">
              <ProductList
                addToChart={this.state.addToChart}
                isLoaded={this.state.isLoaded}
                products={this.state.products}
              ></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
