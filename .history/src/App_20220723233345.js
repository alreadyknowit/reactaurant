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
          <CategoryList></CategoryList>

<ProductList></ProductList>
          </Row>

      </Container>
    </div>
  );
}

export default App;
