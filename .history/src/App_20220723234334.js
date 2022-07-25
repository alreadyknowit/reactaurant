import "./App.css";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Row, Container } from "reactstrap";
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row >
          <Col xs="4">
            <CategoryList></CategoryList>
          </Col>
          <Col xs="8">
            <ProductList></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
