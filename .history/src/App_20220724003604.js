import "./App.css";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Row, Container } from "reactstrap";
import { render } from "@testing-library/react";




class App extends Component {

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
