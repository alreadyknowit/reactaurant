import logo from './logo.svg';
import './App.css';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import {Col,Row} from 'reactstrap';
function App() {
  return (
    <div className="App">

      <Col>

      <Navi></Navi>
      <Row>

      <CategoryList></CategoryList>

      <ProductList></ProductList>
      </Row>
   
      </Col>
    </div>
  );
}

export default App;
