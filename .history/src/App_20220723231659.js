import logo from './logo.svg';
import './App.css';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <CategoryList></CategoryList>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
