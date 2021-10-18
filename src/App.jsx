import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FilterProducts from 'components/FilterProduct';
import ProductList from 'components/ProductList';
import AddProduct from 'components/AddProduct';

function App() {
  return (
    <Container className="p-3">
      <div className="py-5 text-center">
        <h1>Product's CRUD</h1>
        <p className="lead">
          Go ahead and play with a CRUD made with React, Bootstrap and Recoil.js
        </p>
      </div>
      <Row>
        <Col xs={12} md={4}>
          <AddProduct />
        </Col>
        <Col xs={12} md={8}>
          <FilterProducts />
          <hr />
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
