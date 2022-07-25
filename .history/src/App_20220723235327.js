import "./App.css";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Row, Container } from "reactstrap";
function App() {

  let categoryInfo ={title: "Categories",  color:"green"}
  let productInfo ={tile:"Products", color:"red"};
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row >
          <Col xs="4">
            <CategoryList title={categoryInfo}></CategoryList>
          </Col>
          <Col xs="8">
            <ProductList title={productInfo}></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
