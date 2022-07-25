import "./App.css";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Row, Container } from "reactstrap";
function App() {

  let categoryList ="Category List";
  let productList ="Product List";
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row >
          <Col xs="4">
            <CategoryList title={categoryList}></CategoryList>
          </Col>
          <Col xs="8">
            <productList title={productList}></productList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
