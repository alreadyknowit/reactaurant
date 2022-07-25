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
        <Col>
          <Navi></Navi>
          <Row>
            <CategoryList></CategoryList>

            <ProductList></ProductList>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;
