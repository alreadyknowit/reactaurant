import logo from "./logo.svg";
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
        <Row>
          <Col>
            <CategoryList></CategoryList>
          </Col>
          <Col>
            <ProductList></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
