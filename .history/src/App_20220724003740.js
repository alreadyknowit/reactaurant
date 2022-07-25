import "./App.css";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Row, Container } from "reactstrap";
import React, { Component } from "react";


class App extends Component {


  
  changeCategory = (categoryName) =>
  this.setState({ currentCategory: categoryName }); 

   categoryInfo ={title: "Categories",  color:"green"}
   productInfo ={title:"Products", color:"red"};
 render(){
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row >
          <Col xs="4">
            <CategoryList info={categoryInfo}></CategoryList>
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
