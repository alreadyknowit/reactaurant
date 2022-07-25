import "./App.css";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Row, Container } from "reactstrap";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'alertifyjs/build/css/alertify.css'
import alertify from "alertifyjs";

class App extends Component {
  state = {
    currentCategory: null,
    products: [],
    isLoaded: false,
    cart: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async (category) => {
    let url = "http://localhost:3004/products";
    if (category) url += "?categoryId=" + category.id;
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

  addToCart = (product) => {
    let newCart = this.state.cart;
    let added = newCart.find((ct) => ct.product.id === product.id);
    if (added) {
      added.quantity++;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.set('notifier','position', 'top-right');
    alertify.success(product.productName + " added successfully!",1)
  };

  clearProducts = () => {
    this.setState({ cart: [] });
    alertify.error("Cart cleared")
  };

  removeSingleItem = (product) => {
    let array = this.state.cart;
    const index = array.indexOf(product);
    if (index > -1) {
      array.splice(index, 1);
    }
    this.setState({cart:array})
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category, isLoaded: false });
    this.getProducts(category);
  };
  render() {
    return (
      <div className="App">
        <Container>
          <Navi
            removeSingleItem={this.removeSingleItem}
            clearProducts={this.clearProducts}
            cart={this.state.cart}
          ></Navi>

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
                addToCart={this.addToCart}
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
